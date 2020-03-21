export default class Explosion{
	constructor(game){
		this.game = game;
		this.context = this.game.context;
		this.explosion = new Image;
		this.explosion.src ="./images/explosprite.png";
		this.frame_size =128;
		this.currentFrame =0;
	}

	update(){
		setInterval(()=>this.explode(),50);
        this.currentFrame=0;
	}

	explode(){
		this.dx = (this.currentFrame%4)*this.frame_size;
		this.dy = Math.floor(this.currentFrame/4)*this.frame_size;
		this.context.drawImage(this.explosion,this.dx,this.dy,128,128,this.game.playerCar.positionX,650,80,80);
		this.currentFrame++;
	}
}