// select all required elements

const rows = document.querySelectorAll(".row"),
  button = document.querySelector(".form__button"),
  form = document.querySelector("form");

rows.forEach((row) => {
  // select respective input, error icon and message
  const input = row.querySelector("input"),
    errorIcon = row.querySelector(".error__img"),
    errorMessage = row.querySelector(".error__message");

  const handleSubmit = (e) => {
    // // console.log("input", input);

    if (input.value === "") {
      // add appropriate class to error icon and message
      errorIcon.classList.add("show__icon");
      errorMessage.classList.add("show__message");
    }

    if (input.value !== "" && input.type !== "email") {
      errorIcon.classList.remove("show__icon");
      errorMessage.classList.remove("show__message");
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // check for email input
    if (input.value !== "" && input.type === "email") {
      if (!isValidEmail(input.value)) {
        errorIcon.classList.add("show__icon");
        errorMessage.classList.add("show__message");
      } else {
        errorIcon.classList.remove("show__icon");
        errorMessage.classList.remove("show__message");
      }
    }

    // clear all inputs only if allConditions is true
  };

  // display error icon and message if input is empty on submitting form
  button.addEventListener("click", handleSubmit);
});
