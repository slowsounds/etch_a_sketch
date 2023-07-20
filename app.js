let result = document.querySelector(".container");

function userPrompt(){
    let popup;
    popup = parseInt(window.prompt("How many boxes between 1-50, hot stuff?","15"));
    while(popup >50){
        alert("Try something smaller")
        popup = parseInt(window.prompt("How many boxes between 1-50, hot stuff?","15"));
    }
    console.log("popup is " + popup);
    if (result.hasChildNodes()){
        console.log("this is true");
        let child = result.lastElementChild;
        while(child){
            result.removeChild(child);
            child = result.lastElementChild;
        }
        playGame(popup);
}
    else {
        playGame(popup);
    }
    return popup;
}


function playGame(popupAnswer){
if (popupAnswer == null || popupAnswer == ""|| isNaN(popupAnswer)){
    let text = document.createElement('div');
    // text = "Aw, you don't want to play.";
    text.innerHTML = "Aw, you don't want to play.";
    result.appendChild(text);
}
else{
const repeatSquare = function(v) {
    for (let i = 0; i < v; i++){ 
        let newSquare = document.createElement('div');
        newSquare.className = "containers";
        for (let x = 1; x <= v; x++){
            let newRow = document.createElement('div');
            newRow.className = "square";
            newRow.addEventListener("mouseenter", mouseOver);
            newSquare.appendChild(newRow);
        }
        result.appendChild(newSquare);
}}
repeatSquare(popupAnswer);

} 
}


function mouseOver(){
    this.style.backgroundColor = 'green';
    this.id = "changedColor";
    let colorOne = document.querySelectorAll(".square");
    let colorTwo = document.querySelectorAll("#changedColor");
    console.log(colorOne.length);
    console.log(colorTwo.length);
    if (colorOne.length == colorTwo.length){
        console.log("SUCcESS");
        if (result.hasChildNodes()){
            console.log("this is true");
            let child = result.lastElementChild;
            while(child){
                result.removeChild(child);
                child = result.lastElementChild;
            }
            var elem = document.createElement("img");
            elem.src = './db.png'
            result.appendChild(elem);
    }
    // else {
    //     console.log("hell naw");
    // }
}}


// const easterEgg = function(){
//     let sq=Array.from(square)


// const easterEgg = function(){
//     for  
// } 


// let text;
// function playGame(ab){
//     let result = document.querySelector(".container");
//     switch (ab) {
//         default: {
//             const repeatSquare = function(v) {
//                 let result = document.querySelector(".container");
//                 for (let i = 0; i < v; i++){ 
//                     let newSquare = document.createElement('div');
//                     newSquare.className = "containers";
//                     for (let x = 1; x <= v; x++){
//                         let newRow = document.createElement('div');
//                         newRow.className = "square";
//                         newRow.addEventListener("mouseenter", mouseOver);
//                         newSquare.appendChild(newRow);
//                     }
//                     result.appendChild(newSquare);
//             }}
//             repeatSquare(result);
//             break;
//         }
//         case 'null': {
//             text = "Aw, you don't want to play.";
//             document.querySelector(".container").innerHTML = text;
//             break;
//     }
//         case '': {
//             text = "Aw, you don't want to play.";
//             document.querySelector(".container").innerHTML = text;
//             break;
// }
//         case result.hasChildNodes(): {
//             console.log("this is true");
//             window.location.reload();
//             const repeatSquare = function(v) {
//                 let result = document.querySelector(".container");
//                 for (let i = 0; i < v; i++){ 
//                     let newSquare = document.createElement('div');
//                     newSquare.className = "containers";
//                     for (let x = 1; x <= v; x++){
//                         let newRow = document.createElement('div');
//                         newRow.className = "square";
//                         newRow.addEventListener("mouseenter", mouseOver);
//                         newSquare.appendChild(newRow);
//                     }
//                     result.appendChild(newSquare);
//             }}
//             repeatSquare(result);
//             break;
//         }
//     }
// }
// if (result == null || result == ""|| isNaN(result)){
//     text = "Aw, you don't want to play.";
//     document.querySelector(".container").innerHTML = text;
// }
// else if (document.querySelector(".container").hasChildNodes() !== false){
//     window.location.reload();
// }


// else{
// const repeatSquare = function(v) {
//     let result = document.querySelector(".container");
//     for (let i = 0; i < v; i++){ 
//         let newSquare = document.createElement('div');
//         newSquare.className = "containers";
//         for (let x = 1; x <= v; x++){
//             let newRow = document.createElement('div');
//             newRow.className = "square";
//             newRow.addEventListener("mouseenter", mouseOver);
//             newSquare.appendChild(newRow);
//         }
//         result.appendChild(newSquare);
// }}
// repeatSquare(result);
// }
// }



// this partially works:
// let text;
// function playGame(result){
// if (result == null || result == ""|| isNaN(result)){
//     text = "Aw, you don't want to play.";
//     document.querySelector(".container").innerHTML = text;
// }
// else if (document.querySelector(".container").hasChildNodes() !== false){
//     window.location.reload();
// }
// else{
// const repeatSquare = function(v) {
//     let result = document.querySelector(".container");
//     for (let i = 0; i < v; i++){ 
//         let newSquare = document.createElement('div');
//         newSquare.className = "containers";
//         for (let x = 1; x <= v; x++){
//             let newRow = document.createElement('div');
//             newRow.className = "square";
//             newRow.addEventListener("mouseenter", mouseOver);
//             newSquare.appendChild(newRow);
//         }
//         result.appendChild(newSquare);
// }}
// repeatSquare(result);
// }}


// this works:
// let text;
// if (userPrompt == null || userPrompt == ""|| isNaN(userPrompt)){
//     text = "Aw, you don't want to play.";
//     document.querySelector(".container").innerHTML = text;
// }
// else{
// const repeatSquare = function(v) {
//     let result = document.querySelector(".container");
//     for (let i = 0; i < v; i++){ 
//         let newSquare = document.createElement('div');
//         newSquare.className = "containers";
//         for (let x = 1; x <= v; x++){
//             let newRow = document.createElement('div');
//             newRow.className = "square";
//             newRow.addEventListener("mouseenter", mouseOver);
//             newSquare.appendChild(newRow);
//         }
//         result.appendChild(newSquare);
// }}

// repeatSquare(userPrompt);
// }

// function mouseOver(){
//     this.style.backgroundColor = 'green';
// }








// parseInt

// for (var a = 0; a < newRow.length; a++) {
//     newRow.addEventListener("mouseenter", mouseOver);
// }

// var newVars = document.querySelectorAll(".square")
// console.log('Number of "demoElements" found: ' + newVars.length);
// console.log(typeof newVars);
// console.log(newVars);

// let colorSquare = '';
// for (var i = 0; i < newVars.length; i++) {
//     console.log('newVar: ', newVars[i]); 
//     colorSquare = colorSquare + newVars[i];
//     console.log('colorSquare: ', colorSquare);
// }




// var elements = document.getElementsByClassName("square");
// var names = [];
// for(var i = 0; i < elements.length; i++) {
//     names = names + elements[i].value;
// }
// console.log(typeof elements);
// console.log(typeof names);
// console.log(elements);
// console.log(names);


// function mouseOver(){
//     this.className = "colorChange";
// }



// function check(x){
// if (typeof x !== 'undefined') {
//     let output
//     ouput = "Hello " + x + "is undefined";
//     console.log(output);
// }}

// check(container);


// this one claims something is undefined, I suppose it is "this"
// function mouseOver(){
//     this.style.backgroundColor = 'green';
// }



// this works for one square. i need to get the var names to work on this instead of div.
// var div = document.querySelector('.square');
// console.log(typeof div);
// console.log(div);
// div.onmouseover = function() {
//   this.style.backgroundColor = 'green';
// };

// let divs = '';
// for(var i = 0; i < divs.length; i++) {

// }






// what seemed to be getting close:




// let firstSquare = document.getElementsByClassName("square");
// for (var i=0; i<firstSquare.length; i++) {
//     mouseOver();
// }

// function colorChange() {
//     console.log("yup");
//     // x.style.backgroundColor = "lightblue";
// }


// I got the first square to change colors:

// function mouseOver() {
//     addEventListener("click", colorChange());
// }

// function colorChange(x) {
//     x.style.backgroundColor = "lightblue";
// }

// let firstSquare = document.getElementsByClassName("square");
// for (var i=0; i<firstSquare.length; i++) {
//     firstSquare[i].addEventListener("click", colorChange());
// }

// newShit = document.querySelectorAll("h1");
// console.log(newShit);

// function mouseEnter(x) {
//     x.style.backgroundColor = "lightblue";
//     };

// firstSquare.onmouseenter = function() {colorChange()};
// document.querySelector(".square").addEventListener("mouseenter", colorChange);
// console.log(firstSquare);

// var gridList = document.querySelectorAll(".colorChange");
// var gridListArray = [...gridList];
// gridListArray.forEach((div) =>{
//     // console.log({div});
//     // div.className = "newColor";
//     colorChange(div);
// })

// console.log("gridList is" + gridList);

// function colorChange() {
//     document.querySelector(".gridList").style.backgroundColor = "lightblue";
// }

// var missingElement = document.querySelectorAll('.colorChange');
// console.log(missingElement);


// var missingElements = document.querySelectorAll('.colorChange');

// if (missingElements.length === 0) {
//     console.log('no elements found');
// } else {
//     console.log('I found some elements');
// }

// function myFunction() {
//     document.getElementById("myDIV").style.backgroundColor = "lightblue";
//   }


// document.querySelector(".container").style.backgroundColor = 'color';

// const repeatSquare = function(x) {
//     let result = []
//     for (let i = 1; i < 5; i++){ 
//         let newSquare = document.querySelector(".square");
//         let squares = newSquare.cloneNode(true);
//         squares.classList.add('.square');
//         newSquare.after(squares);
// }
// return result
// };

// const repeatRow = function(x) {
//     let result = []
//     for (let i = 1; i < 5; i++){ 
//         let newSquare = document.querySelector(".row");
//         let squares = newSquare.cloneNode(true);
//         squares.classList.add('.row');
//         newSquare.after(squares);
// }
// return result
// };

// repeatSquare(square);
// repeatRow(square);


// const repeatSquare = function(x) {
//     let result = []
//     for (let i = 1; i < 17; i++){ 
//         let x = elem.cloneNode(true);
//         result.push(x);
// }
// return result
// };

// repeatSquare(square);


// const squares = document.querySelector(".grid");

// document.querySelector(".square").appendChild(squares);


// let newSquare = document.querySelector(".square");
// let squares = newSquare.cloneNode(true);
// squares.classList.add(".square");
// newSquare.after(squares);




// let square = document.createElement('div');
// document.querySelector(".container").appendChild(square);
