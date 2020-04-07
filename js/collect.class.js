export default class Collect{
	constructor(game){
		this.game = game;
		this.context = this.game.context;
		this.collection = new Image;
		this.collection.src ="./images/collect.png";
		this.frame_size =325;
		this.currentFrame =0;
	}

	update(){
		setInterval(()=>this.collecting(),50);
        this.currentFrame=0;
	}

	collecting(){
		this.dx = (this.currentFrame)*this.frame_size;
		this.context.drawImage(this.collection,this.dx,0,325,325,this.game.playerCar.positionX,this.game.playerCar.positionY,80,80);
		this.currentFrame++;
	}
}