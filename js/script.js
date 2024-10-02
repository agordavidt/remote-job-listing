const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const welcomeMessage = document.getElementById("welcome-message");
  const logoutButton = document.getElementById("logout");

  if (document.title === "Login - Remote Job Listings") {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "index.html";
      } else {
        document.getElementById("login-error").textContent =
          "Invalid username or password.";
      }
    });
  } else {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      welcomeMessage.textContent = `Welcome, ${loggedInUser.username}!`;
      logoutButton.style.display = "block";
    } else {
      window.location.href = "login.html";
    }

    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }
});
