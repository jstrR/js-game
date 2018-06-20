import './../css/task.css';
import correctAnswer from './correctAnswer.js';
import incorrectAnswer from './incorrectAnswer.js';
import animateSpell2 from './spell2Animation.js';
import animateSpell1 from './spell1Animation.js';

const callMet = document.querySelector('#callSeqMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.seqMet');
const checkAnswer = document.querySelector('#sendSeqAnswer');
const mainMenu = document.querySelector('#seqMainMenu');
const answer = document.querySelector('#userSeqInput');
const task = document.querySelector('#seqText');

let sequences = {
	'2, 4, 6, 8' : '10',
	'1000, 1, 500, ?, 50, 2.718' : '500',
	'Чебышев, Тургенев, Моцарт, Лермонтов, Чайковский, Берлиоз' : 'Моцарт',
	'П, В, С, ?, П, С, В' : 'Ч',
	'Ь, Ь, Т, Ь, ?, Ь, Ь, Т, Ь, Ь, Ь, Ь' : 'Й'
};

let currRandSeq = '';

let pickRandSeq = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(sequences).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandSeq = Object.keys(sequences)[pickRandSeq()];
	task.innerHTML = currRandSeq;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === sequences[currRandSeq]){
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
