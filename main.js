const button = document.querySelector(".submit-button");
const grades = document.querySelectorAll(".grades");
const mainPage = document.querySelector(".component-container");
const thankPage = document.querySelector(".thank-you");
const valorationText = document.querySelector(".valoration");
const number = document.getElementById("number");
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

let interval;
let i = Math.floor(Math.random() * 1000) + 1;
let j = 1;
console.log(i);
const handleSubmit = (event) => {
  mainPage.classList.add("hidden");
  thankPage.classList.remove("hidden");
  setUpperCountDown();
};

const setUpperCountDown = () => {
  interval = setInterval(() => {
    number.textContent = `${j} times`;
    j++;
    stopIntervalCounter();
  });
};

const stopIntervalCounter = () => {
  if (j > i) {
    clearInterval(interval);
  }
};

Array.from(grades).forEach((grade) => {
  grade.addEventListener("click", handleClick);
});

number.addEventListener("change", stopIntervalCounter);
button.addEventListener("click", handleSubmit);
