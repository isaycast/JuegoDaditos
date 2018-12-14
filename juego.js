var result=0;
var result1=0;
var cambio=0;
var intentos=0;
var current0=0;
var current1=0;
var btnUNO = document.querySelector(".btn-roll");
var btnDOS = document.querySelector(".btn-hold");

document.querySelector(".btn-new").addEventListener("click",function(){
    btnUNO.style.visibility = 'visible';
    btnDOS.style.visibility = 'visible';
    document.getElementById("score-0").textContent=0;
    document.getElementById("score-1").textContent=0;
    document.getElementById("current-0").textContent=0;
    document.getElementById("current-1").textContent=0;
    document.querySelector("#name-0").innerText="Player 1 ";
    document.querySelector("#name-1").innerText="Player 2 ";
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
    result=0;
    result1=0;
    cambio=0;
    current0=0;
    current1=0;
    
    
    
})
document.querySelector(".btn-roll").addEventListener("click",function(){
    switch(cambio){
           case 0:
                var num= Math.floor(Math.random()*6); 
                var random=num+1;
                current0=random+current0;
                result=random+result;
                document.querySelector(".dice").src="dice-" + random +".png"; 
                document.getElementById("current-0").textContent=current0;

               
                if(random===1){
                     result=result-current0;
                     current0=0;
                     cambio=1;
                     document.getElementById("current-0").textContent=0;
                     document.querySelector(".player-0-panel").classList.remove('active');
                     document.querySelector(".player-1-panel").classList.add('active');
                    

                }
             if(result>=50){
                     document.querySelector(".player-0-panel").classList.remove('active');
                    document.querySelector("#name-0").innerText="Player 1 Win";
                    btnUNO.style.visibility = 'hidden';
                    btnDOS.style.visibility = 'hidden';
                    
                }
        break;
        case 1:
            
                var num= Math.floor(Math.random()*6); 
                var random=num+1;
                current1=random+current1;
                result1=random+result1;       
                document.querySelector(".dice").src="dice-" + random +".png";
                document.getElementById("current-1").textContent=current1;
    
                    
                if(random===1){
                        result1=result1-current1;
                        cambio=0;
                        current1=0;
                        document.getElementById("current-1").textContent=0;
                        document.querySelector(".player-1-panel").classList.remove('active');
                        document.querySelector(".player-0-panel").classList.add('active');
                    }
              if(result1>=50){
                        document.querySelector(".player-1-panel").classList.remove('active');
                        document.querySelector("#name-1").innerText="Player 2 Win";
                        btnUNO.style.visibility = 'hidden';
                        btnDOS.style.visibility= 'hidden';
                    }
            
        break;
         
    }
})
document.querySelector(".btn-hold").addEventListener("click",function(){
    if (cambio===0){
         current0=0;
         cambio=1;
         document.getElementById("score-0").textContent=result;
         document.getElementById("current-0").textContent=current0;
         document.querySelector(".player-0-panel").classList.remove('active');
         document.querySelector(".player-1-panel").classList.add('active');
    }
    else
        {
    
         current1=0;       
         cambio=0;
         document.getElementById("score-1").textContent=result1;
         document.getElementById("current-1").textContent=current1;
         document.querySelector(".player-1-panel").classList.remove('active');
         document.querySelector(".player-0-panel").classList.add('active');
        }
    
})

