export default class Tick{
	constructor(game){
		this.game = game;
		this.context = this.game.context;
		this.explosion = new Image;
		this.explosion.src ="./image/done.png";
		this.frame_size =50;
		this.currentFrame =0;
	}



	explode(){
		this.dx = (this.currentFrame%4)*this.frame_size;
		this.dy = Math.floor(this.currentFrame/4)*this.frame_size;
		this.context.drawImage(this.explosion,this.dx,0,50,50,this.game.playerCar.positionX,650,50,50);
		this.currentFrame++;
	}
}