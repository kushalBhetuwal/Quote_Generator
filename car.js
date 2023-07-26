class Car{
    constructor(x,y,width,height) {
        this.x = x;
        this.y= y;
        this.width =width;
        this.height =height;
        this.controls = new Control();
        this.speed= 0;
        this.acceleration =2;
        this.friction =0.5;
        this.maxspeed = 30;
       
    }
    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        ctx.fill();
        
    }

    update(){
       if(this.controls.forward){
        this.speed+=this.acceleration
       }
       if(this.controls.reverse){
        this.speed-=this.acceleration
       }
       if(this.speed>this.maxspeed){
        this.speed = this.maxspeed
       }
       if(this.speed<-this.maxspeed/2){
        this.speed = -this.maxspeed/2
       }
       if(this.speed>0){
        this.speed-=this.friction
       }
       if(this.speed<0){
        this.speed+=this.friction
       }
       if(Math.abs(this.speed)<this.friction){
        this.speed = 0;
       }
     

       this.y-=this.speed;
    }
}
            