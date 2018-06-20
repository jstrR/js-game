import drawGameBackgroundEarth from './js/game-background.js';
import drawMainHero from './js/main-hero.js';
import drawMonster from './js/monster.js';
import './js/mathMethod.js';
import './js/audioMet.js';
import './js/falsy.js';
import './js/translate.js';
import './js/missed.js';
import './js/sequence.js';
import './js/actors.js';
import './js/questions.js';
import './js/compare.js';

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
document.body.appendChild(canvas);

const showMonsterHP = document.querySelector('.monster-HP');
const showMainHeroHP = document.querySelector('.mainHero-HP');
const openMenu = document.querySelector('.menu-open');
const casts = document.querySelector('.casts');

openMenu.addEventListener('click', event =>{
	openMenu.style.display = 'none';
	casts.style.display = 'flex';
});

drawGameBackgroundEarth();
drawMainHero();
drawMonster();

localStorage.setItem('monsterHP', 100);
localStorage.setItem('mainHero', 100);

(function () {
	let mainHeroName = document.querySelector('.mainHero-name');
	let playerid = +localStorage.getItem('curplayerid');
	let rating = localStorage.getItem('rating');
	rating = rating == null ? [] : JSON.parse(rating);
	let player = JSON.parse(localStorage.getItem('players'))[playerid];
	mainHeroName.innerHTML = `${player.lastName} ${player.firstName}`;
	showMonsterHP.innerHTML = '100 HP';
	showMainHeroHP.innerHTML = '100 HP';
}());













