import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callMathMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.mathMet');
const checkAnswer = document.querySelector('#sendMathAnswer');
const mainMenu = document.querySelector('#mathMainMenu');
const answer = document.querySelector('#userMathInput');
const task = document.querySelector('.task');

let randomize = function() {
	let max = 100;
	let min = 0;
	let firstNum = 0;
	let secNum = 0;
	let symbol = ['+','-','/','*'];
	let symbolRand = Math.floor(Math.random() * symbol.length);
	firstNum = Math.floor(Math.random() * (max - min) + min);
	secNum = Math.floor(Math.random() * (max - min) + min);
	return [symbol[symbolRand], firstNum, secNum];
}

let data = []; 

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currTask.style.display = 'flex';
	data = randomize();
	task.innerHTML = data[1] + ' ' + data[0] + ' ' +  data[2];
});

let returnResult = function(){
	let answer = 0;
	switch(data[0]) {
		case '+':
			answer = data[1] + data[2];
			return '' + answer;
			break;
		case '-':
			answer = data[1] - data[2];
			return '' + answer;
			break;
		case '*':
			answer = data[1] * data[2];
			return '' + answer;
			break;
		case '/':
			answer = data[1] / data[2];
			return answer.toFixed(1);
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