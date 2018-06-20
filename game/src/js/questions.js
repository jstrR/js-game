import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callQMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.qMet');
const checkAnswer = document.querySelector('#sendQAnswer');
const mainMenu = document.querySelector('#qMainMenu');
const answer = document.querySelector('#userQInput');
const task = document.querySelector('#qText');

let questions = {
	'How many months a year have 28 days?' : ['all', '12', 'everyone'],
	'What can you see with your eyes closed?' : ['dreams', 'sleep'],
	'What in the fire does not burn and does not sink in the water?' : ['ice'],
	'Whom do Australians call sea osoy?' : ['medusa', 'jellyfish'],
	'Moscow used to be called white stone. And what city was called black?' : ['Chernigov', 'chernigov']
};

let currRandQ = '';

let pickRandQ = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(questions).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandQ = Object.keys(questions)[pickRandQ()];
	task.innerHTML = currRandQ;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentQ = [];
	let flag = false;
	currentQ = questions[currRandQ];
	for (let i = 0; i < currentQ.length; i++){
		if(answer.value === currentQ[i]) {flag = true;}
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
	
