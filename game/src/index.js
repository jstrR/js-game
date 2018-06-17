import drawGameBackgroundEarth from './js/game-background.js';
import damage from './js/mathMethod.js';
import drawMainHero from './js/main-hero.js';
import drawMonster from './js/monster.js';
import audio from './js/audioMet.js';

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
document.body.appendChild(canvas);

drawGameBackgroundEarth();
drawMainHero();
drawMonster();

localStorage.setItem('monsterHP', 100);
localStorage.setItem('mainHero', 100);

const showMonsterHP = document.querySelector('.monster-HP');
const showMainHeroHP = document.querySelector('.mainHero-HP');

showMonsterHP.innerHTML = '100 HP';
showMainHeroHP.innerHTML = '100 HP';












