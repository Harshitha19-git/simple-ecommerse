const registerForm = document.getElementById("registerForm");

console.log("REGISTER JS LOADED");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        console.log("REGISTER RESPONSE:", data);

        if (response.ok) {
            alert("Registered Successfully!");
            window.location.href = "login.html";
        } else {
            alert(data.message || "Registration Failed");
        }

        registerForm.reset();

    } catch (error) {
        console.error(error);
        alert("Registration Failed");
    }

    console.log("register clicked");
});