exports.dropdown = function (dp) {
  console.log(dp);
  if (dp.classList.contains("active")) {
    dp.classList.remove("active");
  } else {
    dp.classList.add("active");
  }
};
// exports.dropdown = dropdown;
