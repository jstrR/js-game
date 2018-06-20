import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callFalsyMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.falsyMet');
const checkAnswer = document.querySelector('#sendFalsyAnswer');
const mainMenu = document.querySelector('#FalsyMainMenu');
const answer = document.querySelector('#userFalsyInput');
const task = document.querySelector('#falsyText');

let examples = {
	'Writer Mark Twain invented and patented a bra clasp' : ['true', 'True'],
	'The Eiffel Tower in the summer becomes higher by 15 centimeters' : ['true', 'True'],
	'The space on the forehead between the eyebrows is called a "racket"' : ['false', 'False'],
	'The flea can accelerate faster than the space shuttle' : ['true', 'True'],
	'Human DNA and banana are similar to 90%' : ['false', 'False']
};

let currRandExample = '';

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(examples).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandExample = Object.keys(examples)[pickRandExample()];
	task.innerHTML = currRandExample;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentExample = [];
	let flag = false;
	currentExample = examples[currRandExample];
	for (let i = 0; i < currentExample.length; i++){
		if(answer.value === currentExample[i]) {flag = true;}
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