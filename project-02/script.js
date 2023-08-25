// actions done before submitting

// store reference to necessary elements
const raters = document.querySelectorAll(".rater");
let selectedRating;

// allow to select only one rater and apply active__input style
raters.forEach((rater) => {
  rater.addEventListener("click", () => {
    raters.forEach((otherRater) => {
      if (otherRater !== rater) {
        otherRater.classList.remove("active");
      }
    });
    rater.classList.toggle("active");

    // update rating by converting selected rater text content
    selectedRating = +rater.textContent;
  });
});

/* ........................................... */

// show thankyou and ride rating once submit is clicked

const submit = document.querySelector(".rating__btn"),
  rating = document.getElementById("rating"),
  thankyou = document.getElementById("thankyou"),
  feedback = document.getElementById("feedback");

submit.addEventListener("click", () => {
  if (selectedRating !== undefined) {
    rating.classList.add("hide");
    thankyou.classList.add("show");

    feedback.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating");
  }
});
