class Game {
	constructor(chosen){
		this.chosen = chosen;
		this.starting();
	}

	starting(){
		const computerChoice = this.computerChose();
		
		this.handleResult(computerChoice, this.chosen)
	}

	computerChose(){
		const chooseNumber = Math.floor(Math.random() * 3);
		let chooseLetter = null;

		switch(chooseNumber){
			case 0:
				chooseLetter = 'rock';
				break;
			case 1:
				chooseLetter = 'paper';
				break;
			case 2:
				chooseLetter = 'scissors';
				break;
		}

		return chooseLetter;
	}

	handleResult(cc, uc){
		if(cc == uc){
			datailResult.innerHTML = `${cc.toUpperCase()}<small>(user)</small> is equal to ${uc.toUpperCase()}<small>(comp)</small>. tail!`
		}
		if(cc == 'rock' && uc == 'paper'){
			userPunctuation += 1;	
			userScore.innerHTML = `${userPunctuation}`

			datailResult.innerHTML = `${uc.toUpperCase()}<small>(user)</small> covers ${cc.toUpperCase()}<small>(comp)</small>. you win!`
		}
		if(cc == 'rock' && uc == 'scissors'){
			computerPunctuation += 1;	
			compScore.innerHTML = `${computerPunctuation}` 

			datailResult.innerHTML = `${cc.toUpperCase()}<small>(comp)</small> breaks the ${uc.toUpperCase()}<small>(user)</small>. you lose!`
		}
		if(cc == 'scissors' && uc == 'rock'){
			userPunctuation += 1;	
			userScore.innerHTML = `${userPunctuation}`

			datailResult.innerHTML = `${uc.toUpperCase()}<small>(user)</small> breaks the ${cc.toUpperCase()}<small>(comp)</small>. you win!`
		}
		if(cc == 'scissors' && uc == 'paper'){
			computerPunctuation += 1;	
			compScore.innerHTML = `${computerPunctuation}` 
			
			datailResult.innerHTML = `${cc.toUpperCase()}<small>(comp)</small> cut the ${uc.toUpperCase()}<small>(user)</small>. you lose!`
		}
		if(cc == 'paper' && uc == 'rock'){
			computerPunctuation += 1;	
			compScore.innerHTML = `${computerPunctuation}`; 

			datailResult.innerHTML = `${cc.toUpperCase()}<small>(comp)</small> covers ${uc.toUpperCase()}<small>(user)</small>. you lose!`
		}
		if(cc == 'paper' && uc == 'scissors'){
			userPunctuation += 1;	
			userScore.innerHTML = `${userPunctuation}`
			
			datailResult.innerHTML = `${uc.toUpperCase()}<small>(user)</small> cut the ${cc.toUpperCase()}<small>(comp)</small>. you win!`
		}
	}
}