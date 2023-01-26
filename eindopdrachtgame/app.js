class App{
    runApplication(){
    let canvas = document.getElementById("canvas");
    let g = canvas.getContext("2d"); 
    

    this.drawBottomSnowman(g, 330, 675);     
    this.drawTopSnowman(g, 330, 630);
    this.drawEyes(g, 340, 620);
    this.drawEyes(g, 320, 630);
    this.drawNose(g, 330, 630);
    this.drawEyes(g, 330, 675);

    this.drawBottomSnowman(g, 930, 675);     
    this.drawTopSnowman(g, 930, 630);
    this.drawEyes(g, 940, 620);
    this.drawEyes(g, 920, 630);
    this.drawNose(g, 930, 630);
    this.drawEyes(g, 930, 675);

    this.drawBottomSnowman(g, 830, 975);     
    this.drawTopSnowman(g, 830, 930);
    this.drawEyes(g, 840, 920);
    this.drawEyes(g, 820, 930);
    this.drawNose(g, 830, 930);
    this.drawEyes(g, 830, 975);


    this.drawHouse(g, "purple", 700, 500);
    this.drawDoor(g, 650, 625);
    
    this.drawHouse(g, "yellow", 200, 500);
    this.drawDoor(g, 150, 625);

    this.drawHouse(g, "blue", 1200, 500);
    this.drawDoor(g, 1150, 625);
    
    this.drawHouse(g, "green", 600, 840);
    this.drawDoor(g, 550, 965);

    
    this.drawHouse(g, "red", 1200, 840);
    this.drawDoor(g, 1150, 965);

    this.drawHouse(g, "pink", 200, 840);
    this.drawDoor(g, 150, 965);

    this.drawTrees(g, 1000, 625);
    this.drawLeaves(g, 1020, 625);

    this.drawTrees(g, 1000, 965);
    this.drawLeaves(g, 1020, 965);

    this.drawTrees(g, 400, 965);
    this.drawLeaves(g, 420, 965);

    this.drawAsphalt(g, 1100, 1100);
    
    
    //eerste horizontaal tweede vertical

    }

    drawTopSnowman(g, x, y) {
        g.fillStyle = "white";
        g.beginPath();
        g.arc(x, y, 22, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 22, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

    }

    drawBottomSnowman(g, x, y) {
        g.fillStyle = "white";
        g.beginPath();
        g.arc(x, y, 30, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 30, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

    }

    drawHouse(g, color, x, y){
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 80, y + 80);
        g.lineTo(x + 80, y + 200);
        g.lineTo(x - 80, y + 200);
        g.lineTo(x - 80, y + 80);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawDoor(g, x, y){
        g.fillStyle = "black";
        g.beginPath();
        g.moveTo(x, y);
        g.rect(x, y, 40, 75)
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawTrees(g, x, y){
        g.fillStyle = "brown";
        g.beginPath();
        g.moveTo(x, y);
        g.rect(x, y, 40, 75)
        g.closePath();
        g.stroke();
        g.fill();
    }
    
    drawLeaves(g, x, y) {
        g.fillStyle = "green";
        g.beginPath();
        g.arc(x, y, 45, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 45, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }
    
    drawEyes(g, x, y) {
        g.fillStyle = "black";
        g.beginPath();
        g.arc(x, y, 2, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 2, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawNose(g, x, y) {
        g.fillStyle = "orange";
        g.beginPath();
        g.arc(x, y, 2, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.arc(x, y, 2, 0, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawAsphalt(g, x , y){
        g.fillStyle = "black";
        g.beginPath();
        g.rect(0, 710, 1600, 60);
        g.rect(0, 1050, 1600, 60);
        g.closePath();
        g.fill();
    }



}

let app = new App();

app.runApplication();