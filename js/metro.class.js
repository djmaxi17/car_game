export default class Metro{
	constructor(game){
		this.game = game;
		this.context = this.game.context;

		this._positionX = 540;
		this._positionY = -500;
        this._speed =8;
		this.metro = new Image;
		this.metro.src = "./images/train.png";

	}


	
	update(){
        this._positionY += this.game.playerCar.speed/8 + this._speed;
		this.context.drawImage(this.metro, this._positionX, this._positionY, 160,700);
        
        if(this._positionY>=780){
            this.game.metro.splice(this.game.metro.indexOf(this),1);
        }
	}
}