let toggleValue = document.getElementById("calctoggle");
let keyboard = document.querySelector(".keyboard");
let mainbg = document.querySelector(".mainbg");
let keybutton = document.querySelectorAll(".keybtn");
let solutionArea = document.querySelector(".solutionarea");
let calcHeading = document.querySelector(".calcheading");
let indicator = document.querySelector(".indi");
let theme = document.querySelector(".theme");
let del = document.querySelector(".keydel");
let keyReset = document.querySelector(".keyreset");
let keySol = document.querySelector(".keySol");

toggleValue.addEventListener(
  "change",
  (handleThemeChange = () => {
    if (toggleValue.value === "1") {
      mainbg.style.backgroundColor = "hsl(222, 26%, 31%)";
      solutionArea.style.backgroundColor = "hsl(224, 36%, 15%)";
      toggleValue.style.backgroundColor = "hsl(223, 31%, 20%)";
      keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
      indicator.style.color = "hsl(0, 0%, 100%)";
      calcHeading.style.color = "hsl(0, 0%, 100%)";
      theme.style.color = "hsl(0, 0%, 100%)";
    } else if (toggleValue.value === "2") {
      mainbg.style.backgroundColor = "hsl(0, 0%, 90%)";
      solutionArea.style.backgroundColor = "hsl(0, 0%, 93%)";
      toggleValue.style.backgroundColor = "hsl(0, 5%, 81%)";
      keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
      indicator.style.color = "hsl(0, 0%, 100%)";
      calcHeading.style.color = "hsl(0, 0%, 100%)";
      theme.style.color = "hsl(0, 0%, 100%)";
    } else if (toggleValue.value === "3") {
      toggleValue.style.backgroundColor = "hsl(268, 71%, 12%)";
      keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
      keybutton.style.backgroundColor = "hsl(0, 0%, 100%)";
      keybutton.style.color = "hsl(221, 14%, 31%)";
    }
  })
);
