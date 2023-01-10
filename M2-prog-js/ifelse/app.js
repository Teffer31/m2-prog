class App
{
    runApplication()
    {
        console.log("Hello World!");
        console.log(canvas);

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(300,350);
        g.lineTo(300,450);
        g.lineTo(450,490);
        g.lineTo(450,390);
        g.closePath();
        g.stroke();
        g.fill();
        


    }
}

let randomGetal = Math.random();
let title = document.getElementById("newstitle");

console.log(randomGetal);

if (randomGetal == 0){
    title.style.backgroundColor ="green"
}
else if (randomGetal <= 0.2){
    title.style.backgroundColor ="red"
}
else if (randomGetal > 0.2 && randomGetal< 0.6){
    title.style.backgroundColor ="blue"
}
else if (randomGetal >= 0.6){
    title.style.backgroundColor ="purple"
}

let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
let app = new App();
app.runApplication();