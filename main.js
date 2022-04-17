const button = document.querySelector(".submit-button");
const grades = document.querySelectorAll(".grades");
const mainPage = document.querySelector(".component-container");
const thankPage = document.querySelector(".thank-you");
const valorationText = document.querySelector(".valoration");
let valoration = 0;

const handleClick = (event) => {
  event.preventDefault();
  const grade = event.target;
  valoration = grade.textContent;
  grade.style.backgroundColor = "hsl(25, 97%, 53%)";
  grade.style.color = "hsl(0, 0%, 100%)";
  setDefault(event);
};

const setDefault = (event) => {
  const father = event.target.parentElement;
  Array.from(father.children).forEach((child) => {
    if (child.textContent !== valoration) {
      child.style.backgroundColor = "hsla(213, 19%, 23%, 0.88)";
      child.style.color = "hsl(216, 12%, 54%)";
    }
  });
};

const handleSubmit = (event) => {
  if (valoration === 0) return;
  mainPage.classList.add("hidden");
  thankPage.classList.remove("hidden");
  valorationText.innerHTML = `You selected ${valoration} out of 5`;
};

Array.from(grades).forEach((grade) => {
  grade.addEventListener("click", handleClick);
});

button.addEventListener("click", handleSubmit);
