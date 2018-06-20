import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callLessMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.lessMet');
const checkAnswer = document.querySelector('#sendLessAnswer');
const mainMenu = document.querySelector('#lessMainMenu');
const answer = document.querySelector('#userLessInput');
const task = document.querySelector('#lessText');

let compareList = {
	'1mbit __ 100kbyt' :'>',
	'1kg fluff __ 1kg iron' : '=',
	'Africa __ Russia' : '>',
	'electron __ atom' : '<',
	'virus __ bacterium' : '<'
};

let currRandComp = '';

let pickRandCompare = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(compareList).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandComp = Object.keys(compareList)[pickRandCompare()];
	task.innerHTML = currRandComp;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentCompare = [];
	let flag = false;
	currentCompare = compareList[currRandComp];
	for (let i = 0; i < currentCompare.length; i++){
		if(answer.value === currentCompare[i]) {flag = true;}
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