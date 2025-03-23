function togglePassword() {
  let passwordInput = document.getElementById("password");
  let toggleIcon = document.querySelector(".password-container button i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}
