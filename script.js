'use strict';
//get the div items in the game
const gameBoardDIV=document.getElementById('gameboard'); 

const loadingBeeDIV=document.getElementById('loadingBee'); 

const gameDIV=document.getElementById('game'); 

const wordDIV=document.getElementById('word');

const lettersDIV=document.getElementById('letters'); 

// get the div items in the wordsBank

const wordsBankDIV=document.querySelector('#wordsBank');

const foundTitleH4=document.querySelector('#foundTitle');

const wordsDIV=document.querySelector('#words');

//create your buttons
const a_Button=document.createElement('button');
a_Button.classList.add("button", "is-warning", "m-2");
a_Button.setAttribute("value", "A");//this is all we want it to produce; value="A"; gives the div the physical value of 'A' 
a_Button.innerHTML="A";

const b_Button=document.createElement('button');
b_Button.classList.add("button", "is-warning", "m-2");
b_Button.setAttribute("value", "B");
b_Button.innerHTML="B";


const c_Button=document.createElement('button');
c_Button.classList.add("button", "is-warning", "m-2");
c_Button.setAttribute("value", "C");
c_Button.innerHTML="C";

const d_Button=document.createElement('button');
d_Button.classList.add("button", "is-warning", "m-2");
d_Button.setAttribute("value", "D");
d_Button.innerHTML="D";

const e_Button=document.createElement('button');
e_Button.classList.add("button", "is-warning", "m-2");
e_Button.setAttribute("value", "E");
e_Button.innerHTML="E";

const f_Button=document.createElement('button');
f_Button.classList.add("button", "is-warning", "m-2");//class makes it LOOK like a button 
f_Button.setAttribute("value", "F");
f_Button.innerHTML="F";

const addButton=document.createElement('div');
addButton.classList.add("button", "is-black"); 



//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons


//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.


//Step-3 write the listeners to take a letter and add to your word div


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



