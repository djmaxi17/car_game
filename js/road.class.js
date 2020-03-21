export default class Road{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.yOffset = -800;
        this.road = new Image;
        this.road.src = "./images/coastal_road1.png";
    }
    
    update(){
        if(this.yOffset > 0){
		this.yOffset = -800;
	}
	
	this.context.drawImage(this.road, 0, this.yOffset);
	this.context.drawImage(this.road, 0, this.yOffset + 800);
	this.context.drawImage(this.road, 0, this.yOffset + 1600);
	
	this.yOffset += this.game.playerCar.speed/8;
    }
}