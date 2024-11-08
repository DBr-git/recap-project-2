console.clear();

// Adds interactive Bookmark Icon
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

// Adds interactive Answer Button
const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const answer = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
});
