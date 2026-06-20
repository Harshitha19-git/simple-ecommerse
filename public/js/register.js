const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/users/register", {
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

        alert("Registration Successful!");
      window.location.href = "login.html";

        document.getElementById("registerForm").reset();

        console.log(data);

    } catch (error) {
        console.error(error);
        alert("Registration Failed");
    }
});