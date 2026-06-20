document.getElementById("loginForm").addEventListener("submit", async function(e) {
    
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
console.log("LOGIN JS LOADED");
    try {
        const response = await fetch("http://localhost:5000/api/users/login", {
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
       console.log(data);

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
    console.log("LOGIN BUTTON CLICKED");
});