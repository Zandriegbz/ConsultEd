document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const users = [
        { username: "student", password: "student123" },
        { username: "teacher", password: "teacher123" }
    ];

    const userInput = document.getElementById("user").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(u => u.username === userInput && u.password === passwordInput);

    if (user) {
        localStorage.setItem("loggedInUser", user.username);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
        console.log("Invalid credentials");
        submitButton.disabled = false;
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const tempEmail = "teacher";
    const tempPassword = "teacher123";

    const UserInput = document.getElementById("User").value;
    const passwordInput = document.getElementById("password").value;

    console.log("User:", UserInput);
    console.log("Password:", passwordInput);

    if (UserInput === tempEmail && passwordInput === tempPassword) {
        alert("Login successful!");
        window.location.href = "DashteacherView.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
        console.log("Invalid credentials");
        submitButton.disabled = false;
    }
});
