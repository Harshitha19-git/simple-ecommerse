document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (data.success) {

    localStorage.setItem(
    "loggedInUser",
    JSON.stringify(data.user)
);

    window.location.href = "index.html";

}

    } catch (error) {
        console.error(error);
        alert("Login Failed");
    }
});