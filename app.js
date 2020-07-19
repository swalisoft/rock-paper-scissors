const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const datailResult = document.getElementById('result');

let userPunctuation = 0;
let computerPunctuation = 0;

rock.addEventListener('click',handleRock);


function handleRock(ev){
	rock.style = 'box-shadow: 0px 0px 15px 0px rgba(212,15,25,1);'
	setTimeout(()=>{
		rock.style = '';
	}, 100);
	
	const game = new Game(ev.target.alt);
}

paper.onclick = (ev) =>{
	paper.style = 'box-shadow: 0px 0px 15px 0px rgba(17,166,212,1);'
	setTimeout(()=>{
		paper.style = '';
	}, 100);

	const game = new Game(ev.target.alt);
};

scissors.onclick = (ev) => {
	scissors.style = 'box-shadow: 0px 0px 15px 0px rgba(28,44,219,1);';
	setTimeout(()=>{
		scissors.style = '';
	}, 100);

	const game = new Game(ev.target.alt);
};