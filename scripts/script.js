// JavaScript Document
console.log("hi");


// Open menu
const openButton = document.querySelector("header > button");
const nav = document.querySelector("nav");

openButton.onclick = () => {
  nav.classList.add("toonMenu");         //Bron classlist: https://www.shecodes.io/athena/46410-what-does-classlist-add-do-in-javascript                 
};


