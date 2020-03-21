
export function isCollide(playerCar,traffic){
    
    for(let i=0;i<traffic.length;i++){
        let trafficCar = traffic[i];
        if(trafficCar.positionY>525 && trafficCar.positionY <775){
         if((trafficCar.positionX-playerCar.positionX) ==0){
            return true;
         }
        }
    }
    return false;
}

