    let Userchoice;
    let ComputerChoi;
    let score = 0;
        
    function gameover(){ //Funcion de fin de juego
        document.getElementById('rock').style.display = 'none';
        document.getElementById('paper').style.display = 'none';
        document.getElementById('scissor').style.display = 'none';
        document.getElementById('result').innerText ='Fin del Juego';
        document.getElementById('restart').style.display = 'inline';
    }    
        
    function addscore(){ //agrega 1 punto
        score++;
        document.getElementById('score').innerText = score;
    }    
        
    function removescore(){ //remueve 1 punto
        score--;
        document.getElementById('score').innerText = score;
        if(score < 0){ //si el puntaje baja de 0, pierde
            gameover();
        }
    }    
        
    function clickrock(){ //si presiona el boton de roca
        Userchoice = 'piedra';
        document.getElementById('py').innerText = Userchoice;
        GenerateComputerChoice();
    }    
        
    function clickpaper(){ //si presiona el boton de papel
        Userchoice = 'papel';
        document.getElementById('py').innerText = Userchoice;
        GenerateComputerChoice();
    }   
    
    function clickscissor(){ //si presiona el boton de tijeras
        Userchoice = 'tijeras';
        document.getElementById('py').innerText = Userchoice;
        GenerateComputerChoice();
    }       
        
    function GenerateComputerChoice(){ //despues de la seleccion del jugador, la computadora selecciona uno al azar
      
        const random = Math.floor(Math.random() * 3) +1;
        
        if(random === 1){
            ComputerChoi = 'piedra'
        }
        
        if(random === 2){
            ComputerChoi = 'papel'
        }
        
        if(random === 3){
            ComputerChoi = 'tijeras'
        }
        
        document.getElementById('pc').innerText= ComputerChoi;
        
        Result();
    }
    
    function Result(){ //suma como 2 strings, y compara para determinar si gano o perdio el jugador
        switch(Userchoice+ComputerChoi){
            case 'papelpiedra':
            case 'tijeraspapel':
            case 'piedratijeras':
                document.getElementById('result').innerText ='Ganaste';
                addscore(); //Casos de ganar
                break
            case 'tijeraspiedra':
            case 'papeltijeras':
            case 'piedrapapel':
                document.getElementById('result').innerText ='Perdiste';
                removescore(); //Caso de perder
                break
            case 'tijerastijeras':
            case 'piedrapiedra':
            case 'papelpapel':
                document.getElementById('result').innerText ='Empate';
                break //Caso de empate
        }
    }
        
    function clickrestart(){ //si presiona el boton de reiniciar
            score=0;        
            document.getElementById('score').innerText = score;
            document.getElementById('rock').style.display = 'inline';
            document.getElementById('paper').style.display = 'inline';
            document.getElementById('scissor').style.display = 'inline';
            document.getElementById('restart').style.display = 'none';
            document.getElementById('result').innerText='';
            document.getElementById('pc').innerText='';
            document.getElementById('py').innerText='';
    }