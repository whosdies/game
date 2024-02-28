function startgame(){//функция которая включается после нажатия на кнопку
    gameloop();
}

var count = 0; //переменная для подсчета
var personvis = false; //переменная для скрытия и показа персонажа
var score = 0;//переменная для подсчета очков


function gameloop(){
    personvis = !personvis;//меняет false  и true местами

    var randomnum = Math.floor(Math.random()*8) + 1; //рандомная переменная от 8 до 0

    if(personvis == true){//если персонажа  видно то дать переменной значение видимый
        var classtoset = "character visible";

    }
    else{//если персонажа не видно то дать переменной значение скрытый
        var classtoset = "character hidden";
    }
    var gamezone = document.getElementById("gamezone");//получить значение переменной из index.html

    for(i = 0; i<8; i++){
        gamezone.children[i].className = classtoset;//присваивает классу character 
        gamezone.children[i].innerHTML = "Персонаж";//меняет цифру div на "персонаж"
        gamezone.children[i].onclick = function(){//при нажатии на персонажа -2
            score-=2
            document.getElementById("lll").innerHTML = score;
        };
    }

    gamezone.children[randomnum-1].innerHTML = "Лишний";// меняет цифру div на "лишний"
    gamezone.children[randomnum-1].className = classtoset + " silly";//присваивает классу character доп класс silly

    gamezone.children[randomnum-1].onclick = function(){//при нажатии на лишнего +1
        score+=1
        document.getElementById("lll").innerHTML = score;
    };
    
    count += 1;//увеличить значение переменной count на 1
    if (count <12){//если значение count меньше 12 то подождать 3 секунды и перезапустить функцию gameloop
        setTimeout(gameloop, personvis ? 1000:3000)
    }
    else{//если count больше 12 то игра окончена
        alert("игра окончена");
        alert("счёт " + score)
    }

}