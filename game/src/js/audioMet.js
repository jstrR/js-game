import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.audioMet');
const checkAnswer = document.querySelector('#sendAudioAnswer');
const mainMenu = document.querySelector('#audioMainMenu');
const callMet = document.querySelector('#callAudioMet');
const answer = document.querySelector('#userAudioInput');
const audio = document.querySelector('audio');

let audioList = ['../src/sound/activity.mp3', '../src/sound/dog.mp3', '../src/sound/global.mp3', '../src/sound/inspiration.mp3', '../src/sound/mind.mp3', '../src/sound/strategy.mp3', '../src/sound/transfer.mp3'];
let currRandAudio = 0;

let pickRandAudio = function () {
	let randNumber = Math.floor(Math.random() * audioList.length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandAudio = pickRandAudio();
	audio.src = audioList[currRandAudio];
	currTask.style.display = 'flex';
});

let returnResult = function(){
	switch(currRandAudio) {
		case 0:
			return 'activity';
			break;
		case 1:
			return 'dog';
			break;
		case 2:
			return 'global';
			break;
		case 3:
			return 'inspiration';
			break;
		case 4:
			return 'mind';
			break;
		case 5:
			return 'strategy';
			break;
		case 6:
			return 'transfer';
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
		audio.src = '';
		animateSpell2();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		audio.src = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
});