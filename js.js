let x = screen.height;
let y = screen.width;
let totalcon = x * y;
console.log(totalcon);
let mycon = 20 * 21;
console.log(mycon);
let z = totalcon / mycon;
console.log(z);

for (let i = 1; i <= z; ++i) {
  const box = document.createElement("div");
  box.classList.add("mybox");

  box.addEventListener("mousemove", () => {
    box.style.backgroundColor = "yellow";
  });
  box.addEventListener("touchmove", () => {
    box.style.backgroundColor = "yellow";
  });
  box.addEventListener("touchend", () => {
    box.style.backgroundColor = "black";
    box.style.transition = "background-color 0.5s";
  });

  box.addEventListener("mouseleave", (e) => {
    box.style.backgroundColor = "black";
    box.style.transition = "background-color 0.5s";
  });

  document.body.appendChild(box);
}
// const span = document.createElement("span");
// span.innerText = "    PIXEL ERROR 🤐🤐🤐";
// span.style.color = "black";
// document.body.appendChild(span);
