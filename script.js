let ball = document.getElementById("ball");
let bar = document.getElementById("bar");
let xal = document.getElementById("score");
let barX = 0;
let ballX = 0;
let ballY = 0;
let score = 0;
let speed = 4;
let dx = 4;
let dy = 4;

let interval = setInterval(ballMove,40);

function ballMove(){
    if(ballX < 0 || ballX > 750) { dx *= -1;}
    if(ballY < 0 || ballY >= 530) { dy *= -1;}

    if(ballY >= 530){
        if(ballX > (barX-50) && ballX <(barX+100)){
            score++;
            xal.innerHTML = "Score: " + score;
            if(score >= 5 && speed < 10){
                speed++;
            }
            else if(speed >= 10 && speed < 20){
                speed += 2;
            }
            else if(speed >= 20){
                speed += 3;
            }
        }
        else{
            clearInterval(interval);
            alert(`Şansınızı bir daha yoxlayın. Topladığınız xal: ${score}`);
            location.reload();
        }
    }

    ballX += dx * speed / 2;
    ballY += dy * speed / 2;

    ball.style.left = ballX+"px";
    ball.style.top = ballY+"px";
}

function barMove(){
    bar.style.left = barX+"px";
}

addEventListener("keypress",function(event){

    let key = event.key;
    if(key == "a" || key == "A"){
        if(barX > 0) { barX -= 10;}
    }

    if(key == "d" || key == "D"){
        if(barX < 700) { barX += 10;}
    }

    barMove();
});

document.getElementById("game").addEventListener("mousemove", function(e){
    
    //console.log(e.offsetX);

    if (e.offsetX<700) {
        barX = e.offsetX;
        bar.style.left = e.offsetX + "px";
    }

});