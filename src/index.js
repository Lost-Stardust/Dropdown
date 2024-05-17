import "./styles.css";
import { dropdown } from "./dropdown";
console.log("MEOW MEOW");
const btn = document.querySelector(".dropdownBtn");
const btn2 = document.querySelector(".dropdownBtn2");

btn.addEventListener("click", () => {
  const dp = document.querySelector(".dropdown");
  dropdown(dp);
});

btn2.addEventListener("click", () => {
  const dp = document.querySelector(".dropdown2");
  dropdown(dp);
});
