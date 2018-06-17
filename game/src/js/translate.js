import './../css/task.css';
//import dictionary from './dictionary.js';

const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.transMet');
const checkAnswer = document.querySelector('#sendAnswer');
const mainMenu = document.querySelector('#mainMenu');
const callMet = document.querySelector('#callTransMet');

function transMethod() {
	
}



callMet.addEventListener('click', event=>{
	castsModal.style.display = 'none'; 
	currTask.style.display = 'flex';
	//let randomWord = Math.floor(Math.random() * Object.keys(dictionary).length);
	console.log(dictionary);
});