const loginForm = document.querySelector("#loginForm");
const accountInput = document.querySelector("#account");
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("#passwordToggle");
const loginButton = document.querySelector("#loginButton");
const accountError = document.querySelector("#accountError");
const passwordError = document.querySelector("#passwordError");

const visibleEyeIcon = `
  <svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5c5 0 9 4.5 10 7-1 2.5-5 7-10 7S3 14.5 2 12c1-2.5 5-7 10-7zm0 2c-3.4 0-6.4 2.7-7.7 5 1.3 2.3 4.3 5 7.7 5s6.4-2.7 7.7-5C18.4 9.7 15.4 7 12 7zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"></path>
  </svg>
`;

const hiddenEyeIcon = `
  <svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.3 2L22 20.7 20.7 22l-3.2-3.2C15.9 19.5 14 20 12 20c-5 0-9-4.5-10-8 .5-1.7 2-3.7 4-5.1L2 3.3 3.3 2zm6.1 6.1l1.5 1.5c.3-.1.7-.2 1.1-.2a2.5 2.5 0 012.5 2.5c0 .4-.1.8-.2 1.1l1.8 1.8c.9-.8 1.8-1.8 2.4-2.9-1.3-2.3-4.3-5-7.7-5-.8.1-1.6.2-2.4.5zM4.3 12c1.3 2.3 4.3 5 7.7 5 1.3 0 2.5-.4 3.6-1l-2-2c-.5.3-1 .5-1.6.5A2.5 2.5 0 019.5 12c0-.6.2-1.1.5-1.6L7.5 7.9C6.2 8.9 5.1 10.4 4.3 12z"></path>
  </svg>
`;

function setError(input, errorElement, message) {
  const fieldGroup = input.closest(".field-group");
  fieldGroup.classList.toggle("has-error", Boolean(message));
  errorElement.textContent = message;
}

function validateForm() {
  const account = accountInput.value.trim();
  const password = passwordInput.value.trim();
  let isValid = true;

  if (!account) {
    setError(accountInput, accountError, "請輸入帳號");
    isValid = false;
  } else {
    setError(accountInput, accountError, "");
  }

  if (!password) {
    setError(passwordInput, passwordError, "請輸入密碼");
    isValid = false;
  } else {
    setError(passwordInput, passwordError, "");
  }

  return isValid;
}

function setLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.classList.toggle("is-loading", isLoading);
  loginButton.querySelector(".button-text").textContent = isLoading ? "登入中" : "登入系統";
}

passwordToggle.addEventListener("click", () => {
  const shouldShowPassword = passwordInput.type === "password";
  passwordInput.type = shouldShowPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-label", shouldShowPassword ? "隱藏密碼" : "顯示密碼");
  passwordToggle.innerHTML = shouldShowPassword ? hiddenEyeIcon : visibleEyeIcon;
});

accountInput.addEventListener("input", () => {
  if (accountInput.value.trim()) {
    setError(accountInput, accountError, "");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim()) {
    setError(passwordInput, passwordError, "");
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  window.setTimeout(() => {
    setLoading(false);
  }, 1200);
});
