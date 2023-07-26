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
        this.angle =0;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(100, 500);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(-this.width/2, -this.height/2, this.width, this.height);
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
       if(this.controls.left){
       this.angle+=0.03;
       }
       if(this.controls.right){
        this.angle-=0.03;
       }

       this.y-=this.speed;
    }
}
            