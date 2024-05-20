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
let keySol = document.querySelector(".keysol");

console.log(keybutton);
toggleValue.addEventListener(
  "change",
  (handleThemeChange = () => {
    if (toggleValue.value === "1") {
      indicator.style.color = "hsl(0, 0%, 100%)";
      calcHeading.style.color = "hsl(0, 0%, 100%)";
      theme.style.color = "hsl(0, 0%, 100%)";
      del.style.backgroundColor = "hsl(225, 21%, 49%)";
      solutionArea.style.color = "hsl(0, 0%, 100%)";
      keyReset.style.backgroundColor = "hsl(225, 21%, 49%)";
      keySol.style.backgroundColor = "hsl(6, 63%, 50%)";
      mainbg.style.backgroundColor = "hsl(222, 26%, 31%)";
      solutionArea.style.backgroundColor = "hsl(224, 36%, 15%)";
      toggleValue.style.backgroundColor = "hsl(223, 31%, 20%)";
      keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
      for (j = 0; j < keybutton.length; j++) {
        keybutton[j].style.backgroundColor = "hsl(0, 0%, 100%)";
        keybutton[j].style.color = "hsl(221, 14%, 31%)";
      }
    } else if (toggleValue.value === "2") {
      calcHeading.style.color = "hsl(179, 100%, 0%)";
      theme.style.color = "hsl(179, 100%, 0%)";
      del.style.backgroundColor = "hsl(185, 42%, 37%)";
      keySol.style.backgroundColor = "hsl(25, 98%, 40%)";
      indicator.style.color = "hsl(179, 100%, 0%)";
      keyReset.style.backgroundColor = "hsl(185, 42%, 37%)";
      mainbg.style.backgroundColor = "hsl(0, 0%, 90%)";
      solutionArea.style.backgroundColor = "hsl(0, 0%, 100%)";
      solutionArea.style.color = "hsl(179, 100%, 0%)";
      toggleValue.style.backgroundColor = "hsl(0, 5%, 81%)";
      keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
      for (i = 0; i < keybutton.length; i++) {
        keybutton[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        keybutton[i].style.color = "hsl(221, 14%, 0%)";
      }
    } else if (toggleValue.value === "3") {
      solutionArea.style.color = "hsl(52, 100%, 62%)";
      solutionArea.style.backgroundColor = "hsl(268, 71%, 12%)";
      mainbg.style.backgroundColor = "hsl(268, 75%, 9%)";
      keyReset.style.backgroundColor = "hsl(281, 89%, 26%)";
      keySol.style.backgroundColor = "hsl(176, 100%, 44%)";
      del.style.backgroundColor = "hsl(281, 89%, 26%)";
      calcHeading.style.color = "hsl(52, 100%, 62%)";
      theme.style.color = "hsl(52, 100%, 62%)";
      indicator.style.color = "hsl(52, 100%, 62%)";
      toggleValue.style.backgroundColor = "hsl(268, 71%, 12%)";
      keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
      for (i = 0; i < keybutton.length; i++) {
        keybutton[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        keybutton[i].style.color = "hsl(52, 100%, 62%)";
      }
    }
  })
);
