for (let i = 0; i < 3000; ++i) {
  const box = document.createElement("div");
  box.classList.add("mybox");
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "red";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "black";
    box.style.transition = "background-color 3s";
  });
  document.body.appendChild(box);
}
const span = document.createElement("span");
span.innerText = "    PIXEL ERROR 🤐🤐🤐";
span.style.color = "black";
document.body.appendChild(span);
