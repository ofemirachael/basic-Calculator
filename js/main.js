let inputValue = document.querySelectorAll(".calcitem");
let calculationsection = document.querySelector('.calcsection');
let answerspace = document.querySelector('.answerarea');

inputValue.forEach(input => input.addEventListener('click', function(){

    let clickedvalue = this.textContent;
    calculationsection.textContent  += clickedvalue.padEnd(2);
  
}));


clear = () => {

    calculationsection.textContent = " ";
    answerspace.textContent = " ";

}

multiply = () => {


}

addition = () => {


}

subtraction = () => {


}

division = () => {


}

equals = () =>{


}

sincalc = () => {


}

piecalc = () => {


}

degcalc = () => {
    
}

exponentital = () => {


}

remove = () => {


}



/*
getting and displaying json value

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
keys, or values or entries
*/