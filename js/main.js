let inputValue = document.querySelectorAll(".calcitem");
let calculationsection = document.querySelector('.calcsection')

inputValue.forEach(input => input.addEventListener('click', function(){

    let clickedvalue = this.textContent;
    calculationsection.innerHTML  += clickedvalue;
  
}));

