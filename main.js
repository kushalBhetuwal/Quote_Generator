const canvas = document.getElementById("myCanvas"); 

canvas.width = 200; 

const ctx = canvas.getContext("2d");
const car = new Car(100,500,30,40);
car.draw(ctx);

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}
animate();
