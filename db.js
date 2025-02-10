const { Client } = require('pg'); // Import pg client

// ✅ Create a new client instance with your PostgreSQL connection details
const client = new Client({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'gym_management', // Replace with your database name
  password: '@shadysayings12', // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// ✅ Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected!");

    // ✅ Run a test query after connecting
    return client.query("SELECT NOW()");
  })
  .then((res) => {
    console.log("Database connected at:", res.rows[0].now);
  })
  .catch(err => console.error("❌ Connection Error:", err));

// ✅ Export the client to be used in other files
module.exports = client;

const express = require('express');  // Import Express
const app = express();  // Initialize the app

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port to listen on
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

