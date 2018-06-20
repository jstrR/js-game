import { dictionary } from './dictionary.js';
import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callTranslateMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.translateMet');
const checkAnswer = document.querySelector('#sendTranslateAnswer');
const mainMenu = document.querySelector('#translateMainMenu');
const answer = document.querySelector('#userTranslateInput');
const task = document.querySelector('#translateText');

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(dictionary).length);
	return randNumber;
}

let randTranslate = '';

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currTask.style.display = 'flex';
	randTranslate = Object.keys(dictionary)[pickRandExample()];
	task.innerHTML = randTranslate;
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentTrans = [];
	let flag = false;
	currentTrans = dictionary[randTranslate];
	for (let i = 0; i < currentTrans.length; i++){
		if(answer.value === currentTrans[i]) {flag = true;}
	}
	if(flag){
		correctAnswer();
		currTask.style.display = 'none';
		task.innerHTML = '';
		animateSpell2();
		setTimeout(() => {
	    castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		task.innerHTML = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
	
});