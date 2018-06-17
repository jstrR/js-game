
export default function incorrectAnswer(){
	const showMainHeroHP = document.querySelector('.mainHero-HP');
	let damage = Math.floor(Math.random() * (100 - 0) + 0);
	let currMainHeroHP = localStorage.getItem('mainHero');
	currMainHeroHP = currMainHeroHP - damage;
	if(currMainHeroHP > 0){
		localStorage.setItem('mainHero', currMainHeroHP);
	} else {
		
	}
	showMainHeroHP.innerHTML = currMainHeroHP + ' HP';
	alert('Your answer is incorrect');
}