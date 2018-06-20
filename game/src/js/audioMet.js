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

const audioList = {
	'../src/sound/activity.mp3' : 'activity',
	'../src/sound/dog.mp3' : 'dog',
	'../src/sound/global.mp3' : 'global',
	'../src/sound/inspiration.mp3' : 'inspiration',
	'../src/sound/mind.mp3': 'mind',
	'../src/sound/strategy.mp3' : 'strategy',
	'../src/sound/transfer.mp3' : 'transfer'
};

let randAudio = '';

let pickRandAudio = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(audioList).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	randAudio = Object.keys(audioList)[pickRandAudio()];
	audio.src = randAudio;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === audioList[randAudio]){
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