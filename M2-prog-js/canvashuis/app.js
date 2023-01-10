class App
{
    runApplication()
    {
        console.log("Hello World!");
        console.log(canvas)

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(300,350);
        g.lineTo(300,450);
        g.lineTo(450,490);
        g.lineTo(450,390);
        g.closePath();
        g.stroke();
        g.fill()


    }
}


let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");
let app = new App();
app.runApplication();