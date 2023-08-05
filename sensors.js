class Sensor{
    constructor(car){
        this.car = car; 
        this.raycount = 3;
        this.rayLength = 100; 
        this.rayspread = Math.PI/4;
        this.rays  = [];
    }
    

    update(){
        this.rays = []; 
        for(let i =0; i<this.raycount; i++){
            const rayangle = lerp(this.rayspread/2, -this.rayspread/2, i/(this.raycount-1))
        }
    }
}