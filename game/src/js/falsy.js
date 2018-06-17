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

let examples = ['Writer Mark Twain invented and patented a bra clasp', 'The Eiffel Tower in the summer becomes higher by 15 centimeters', 'The space on the forehead between the eyebrows is called a "racket"', 'The flea can accelerate faster than the space shuttle', 'Human DNA and banana are similar to 90%'];

let currRandExample = 0;

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * examples.length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandExample = pickRandExample();
	task.innerHTML = examples[currRandExample];
	currTask.style.display = 'flex';
});

let returnResult = function(){
	switch(currRandExample) {
		case 0:
			return 'true';
			break;
		case 1:
			return 'true';
			break;
		case 2:
			return 'false';
			break;
		case 3:
			return 'true';
			break;
		case 4:
			return 'false';
			break;
	}
}

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === returnResult()){
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
