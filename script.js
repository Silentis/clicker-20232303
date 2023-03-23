let score = 0;

function incrementScore() {
  score++;
  document.getElementById("score").innerHTML = score;
  const button = document.getElementById("button");
  const currentWidth = parseInt(window.getComputedStyle(button).getPropertyValue("width"));
  const currentHeight = parseInt(window.getComputedStyle(button).getPropertyValue("height"));
  const newWidth = currentWidth - 5;
  const newHeight = currentHeight - 5;
  button.style.width = newWidth + "px";
  button.style.height = newHeight + "px";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  button.style.backgroundColor = "#" + randomColor;
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
  
  if (score >= 40) {
    document.getElementById("score").innerHTML = "You Won!";
  }
}

const button = document.getElementById("button");
button.addEventListener("click", incrementScore);
