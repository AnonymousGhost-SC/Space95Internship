document.getElementById("member-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const memberData = {
        full_name: document.getElementById("full_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        start_date: document.getElementById("start_date").value,
        expiry_date: document.getElementById("expiry_date").value,
    };

    try {
        const response = await fetch("http://localhost:3000/members", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(memberData)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Member registered successfully!");
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Failed to connect to the server.");
    }
});
// Fetch the backend port dynamically
fetch("/api/get-port")
    .then((response) => response.json())
    .then((data) => {
        const API_URL = `http://localhost:${data.port}`;
        console.log(`Using API URL: ${API_URL}`);

        // Update event listeners to use the correct port
        document.getElementById("registerForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            const data = {
                full_name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                start_date: document.getElementById("start_date").value,
                expiry_date: document.getElementById("expiry_date").value
            };

            try {
                const response = await fetch(`${API_URL}/members`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (response.ok) {
                    document.getElementById("successMessage").innerText = "Member registered successfully!";
                    document.getElementById("registerForm").reset();
                } else {
                    alert("Error: " + result.error);
                }
            } catch (error) {
                alert("Failed to connect to server.");
            }
        });

    })
    .catch((error) => {
        console.error("Error fetching API port:", error);
    });
