let inputValue = document.querySelectorAll(".calcitem");
let calculationsection = document.querySelector('.calcsection');
let answerspace = document.querySelector('.answerarea');
let cleardata = document.querySelector('#clear');
let calc = "";

inputValue.forEach(input => input.addEventListener('click', function(){

    let clickedvalue = this.textContent;
    calculationsection.textContent  += clickedvalue.padEnd(2);
  
}));


clear = () => {

    calculationsection.textContent = " ";
    answerspace.textContent = "0";

}

cleardata.addEventListener('click', function(){
    clear();
});


multiply = () => {
 let multiplyValue = inputValue * (calc + 1);
}

addition = () => {
  let addedvalue = inputValue + calc;

}

subtraction = () => {
    let minusvalue = inputValue + calc;

}

division = () => {
    let dividevalue = calc / inputValue;

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