let toggleValue = document.getElementById("calctoggle");
let keyboard = document.querySelector(".keyboard");
let mainbg = document.querySelector(".mainbg");
let keybutton = document.querySelectorAll(".keybtn");

toggleValue.addEventListener(
  "change",
  (handleThemeChange = () => {
    if (toggleValue.value === "1") {
      mainbg.style.backgroundColor = " hsl(224, 36%, 15%)";
      toggleValue.style.backgroundColor = "hsl(223, 31%, 20%)";
      keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
    } else if (toggleValue.value === "2") {
      mainbg.style.backgroundColor = "hsl(0, 0%, 90%)";
      toggleValue.style.backgroundColor = "hsl(0, 5%, 81%)";
      keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
    } else if (toggleValue.value === "3") {
      toggleValue.style.backgroundColor = "hsl(268, 71%, 12%)";
      keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
    }
  })
);
