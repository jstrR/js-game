import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callActMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.actMet');
const checkAnswer = document.querySelector('#sendActAnswer');
const mainMenu = document.querySelector('#actMainMenu');
const answer = document.querySelector('#userActInput');
const img = document.querySelector('img');

let actors = {
	'../src/img/Smith.png' : ['will smith', 'Will Smith'],
	'../src/img/keanureeves.png' : ['Keanu Reeves', 'keanu reeves'],
	'../src/img/bacon.png' : ['Kevin Bacon', 'kevin bacon'],
	'../src/img/redford.png' : ['Robert Radford', 'robert radford'],
	'../src/img/jaredleto.png' : ['Jared Leto', 'jared leto']
};

let currRandAct = '';

let pickRandAct = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(actors).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandAct = Object.keys(actors)[pickRandAct()];
	img.src = currRandAct;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentAct = [];
	let flag = false;
	currentAct = actors[currRandAct];
	for (let i = 0; i < currentAct.length; i++){
		if(answer.value === currentAct[i]) {flag = true;}
	}
	if(flag){
		correctAnswer();
		currTask.style.display = 'none';
		img.src = '';
		animateSpell2();
		setTimeout(() => {
	    castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		img.src = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
});
	
