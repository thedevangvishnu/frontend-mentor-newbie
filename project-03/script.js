// when question__container is clicked, item__answer should be visible

// store reference to all items
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    // console.log("item", item);
    const itemQuestion = item.querySelector(".item__question");
    const itemAnswer = item.querySelector(".item__answer");
    const itemArrow = item.querySelector(".arrow");
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherItemQuestion = otherItem.querySelector(".item__question");
        const otherItemAnswer = otherItem.querySelector(".item__answer");
        const otherItemArrow = otherItem.querySelector(".arrow");
        // console.log("otherItem", otherItem);
        otherItemQuestion.classList.remove("active");
        otherItemAnswer.classList.remove("show");
        otherItemAnswer.classList.remove("rotate__arrow");
      }
    });
    itemQuestion.classList.toggle("active");
    itemAnswer.classList.toggle("show");
    itemArrow.classList.toggle("rotate__arrow");
  });
});
