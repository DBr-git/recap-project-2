console.clear();

const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="cardList"]');

form.addEventListener("submit", (event) => {
  const question = event.target.elements.questionInput.value;
  const answer = event.target.elements.answerInput.value;
  const tag = event.target.elements.tagInput.value;
  // Debug
  console.log("question:", question, "answer:", answer, "tag:", tag);
  // Debug

  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");

  newCard.innerHTML = `
  <article class="card">
            <h2 class="card__question">
              ${question}
            </h2>
            <button
              class="card__button-answer"
              type="button"
              data-js="showAnswerButton"
            >
              Show answer
            </button>
            <p class="card__answer" data-js="answer">${answer}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#${tag}</li>
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="bookmark"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>`;
  cardList.append(newCard);

  //Adding Bookmark and Answer Button Functionality

  const bookmark = document.querySelector('[data-js="bookmark"]');

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
  });

  const showAnswerButton = document.querySelector(
    '[data-js="showAnswerButton"]'
  );
  const answerElement = document.querySelector('[data-js="answer"]');

  showAnswerButton.addEventListener("click", () => {
    answerElement.classList.toggle("card__answer--active");
  });
});
