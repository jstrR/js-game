import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callMissedMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.missedMet');
const checkAnswer = document.querySelector('#sendMissedAnswer');
const mainMenu = document.querySelector('#missedMainMenu');
const answer = document.querySelector('#userMissedInput');
const task = document.querySelector('#missedText');

let letters = {
	'com_unity' : 'm',
	'Eif_el' : 'f',
	'for_head' : 'e',
	'ac_lerate' : 'c',
	'simi_lar' : '',
	'develo_ment' : 'p'
};

let currRandLetter = '';

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(letters).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandLetter = Object.keys(letters)[pickRandExample()];
	task.innerHTML = currRandLetter;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === letters[currRandLetter]){
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
