import Sound from "./sound.class.js";
export default class Score{

	constructor(game){

		this.game = game;

		this.scoreDiv = document.querySelector(".score-meter .score");
        
        this.score =0;
        
        this.hitSound = new Sound("./audio/mario.wav");
	}

	update(){
		this.updateScore();
        this.hitScoreUpdate();
	}
    
    updateScore(){
        if(this.game.playerCar.speed!=0){
            this.score = this.score+0.07;
            if(this.game.playerCar.speed>=50){
            this.score = this.score+0.2;
            }
            else if(this.game.playerCar.speed>=100){
                this.score = this.score +0.3;
            }
            else if(this.game.playerCar.speed>=180){
                this.score = this.score +0.5;
            }
        }
       
        this.scoreDiv.innerHTML =parseInt(this.score);
    }
    
    resetScore(){
        this.score =0;
    }
    
    hitScoreUpdate(){
        for(let i=0;i<this.game.animals.length;i++){
            let animal = this.game.animals[i];
            if(animal.positionY>600 && animal.positionY <775){
                if(Math.abs(animal.positionX-this.game.playerCar.positionX)<50){
                    this.hitSound.play();
                    this.game.animals.splice(this.game.animals.indexOf(animal),1);
                    this.score +=100;
                }
                
            }
        }
    }
}