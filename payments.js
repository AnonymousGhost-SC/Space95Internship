document.getElementById("payment-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const paymentData = {
        member_id: document.getElementById("member_id").value,
        amount: document.getElementById("amount").value,
        payment_date: document.getElementById("payment_date").value,
        payment_method: document.getElementById("payment_method").value
    };

    try {
        const response = await fetch("http://localhost:5000/payments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Payment recorded successfully!");
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Failed to connect to the server.");
    }
});

async function fetchPayments() {
    const memberId = document.getElementById("search_id").value;
    if (!memberId) {
        alert("Please enter a member ID.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/payments/${memberId}`);
        const payments = await response.json();

        if (response.ok) {
            const paymentTable = document.getElementById("payment-history");
            paymentTable.innerHTML = "";
            payments.forEach(payment => {
                paymentTable.innerHTML += `
                    <tr>
                        <td>${payment.payment_id}</td>
                        <td>${payment.amount}</td>
                        <td>${payment.payment_date}</td>
                        <td>${payment.payment_method}</td>
                    </tr>
                `;
            });
        } else {
            alert("Error: " + payments.error);
        }
    } catch (error) {
        alert("Failed to fetch payment history.");
    }
}
