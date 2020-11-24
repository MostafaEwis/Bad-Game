let main = document.querySelector("main");
let btn = document.querySelector("button");
let score = document.getElementById("score");
let sc = 0;
function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

btn.addEventListener("click", () => {
  sc++;  
  let r = randomNum(1, 255);
  let g = randomNum(1, 255);
  let b = randomNum(1, 255);
  main.style.transition = `${randomNum(100, 1000)}ms`;
  main.style.backgroundColor = `rgb(${r},${g},${b})`;
  btn.style.backgroundColor = `rgb(${255 - r},${255 - g},${255 - b})`;
  btn.style.top = `${randomNum(1, 100)}%`;
  btn.style.left = `${randomNum(1, 100)}%`;
  score.textContent = `Score : ${sc}`;
  let newBtn = document.createElement("button");
  newBtn.style.backgroundColor = `rgb(${randomNum(1, 255)}, ${randomNum(
    1,
    255
  )}, ${randomNum(1, 255)})`;
  newBtn.style.top = `${randomNum(5, 95)}%`;
  newBtn.style.left = `${randomNum(5, 95)}%`;
  main.appendChild(newBtn);
});
