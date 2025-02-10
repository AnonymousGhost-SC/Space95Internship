const express = require('express');
const cors = require('cors'); // Allow cross-origin requests
const client = require('./db'); // Import your database client

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for API access

// ✅ Fetch a member by ID
app.get('/members/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10); // Ensure ID is an integer
    try {
        const result = await client.query("SELECT * FROM members WHERE member_id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Member not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add a new member
app.post('/members', async (req, res) => {
    const { full_name, email, phone, start_date, end_date } = req.body;
    try {
        const result = await client.query(
            "INSERT INTO members (full_name, email, phone, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [full_name, email, phone, start_date, end_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add a payment
app.post('/payments', async (req, res) => {
    const { member_id, amount, payment_id, payment_method, payment_date } = req.body;
    try {
        const result = await client.query(
            "INSERT INTO payments (member_id, amount, payment_id, payment_method, payment_date) VALUES ($1, $2, $3, $4, $