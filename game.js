book_top = 0; 
book_left = 0; 
swtch_top = -100; 
swtch_left = Math.floor(Math.random()*720 + 110); 
h_top = 520; 
h_left = 80; 
score = 0; 
ins = 0; 
function reset()
{
    book_top = -100; 
    book_left = -100; 
    swtch_top = -100; 
    swtch_left = Math.floor(Math.random()*720 + 110); 
    score = 0;
    document.getElementById('score').innerHTML = "Score: " + score; 
}

function loseLife()
{
    x = document.getElementById('student').getAttribute('src'); 
    if ( (swtch_left > h_left )
        && (swtch_left < h_left + 100)
        && (swtch_top > h_top + 10)
        && (swtch_top < h_top + 140)
        )
    {
        if ( (x === "images/student.png") || (x === "images/student_flipped.png") )
        {
            document.getElementById('student').src = "images/lostScream.png";
            document.getElementById('student').style.height = "170px"; 
            score -= 1; 
            lose(); 
            document.getElementById('score').innerHTML = "Score: " + score; 
            swtch_top = -90; 
        }
    }
}
function getPoints()
{
    x = document.getElementById('textbook').getAttribute('src'); 
    if ( (book_left > h_left + 50 )
        && (book_left < h_left + 100)
        && (book_top > h_top)
        && (book_top < h_top + 100)
        && ( (x === "images/book_closed.png")
        ||(x === "images/book_closed_2.png")
        ||(x === "images/book_closed_3.png")
        ||(x === "images/book_closed_4.png") ) 
        )
    {
        if (x === "images/book_closed.png")
        {
            document.getElementById('textbook').src = "images/book.png"; 
        }
        else if (x === "images/book_closed_2.png")
        {
            document.getElementById('textbook').src = "images/book_2.png"; 
        }
        else if (x === "images/book_closed_3.png")
        {
            document.getElementById('textbook').src = "images/book_3.png";  
        }
        else if (x === "images/book_closed_4.png")
        {
            document.getElementById('textbook').src = "images/book_4.png"; 
        }
        score += 1; 
        win(); 
        document.getElementById('score').innerHTML = "Score: " + score; 
    } 
}
function startGame()
{
    if ((score < 0) || (score === 10))
    {
        reset(); 
        document.getElementById('start').style.backgroundColor = "violet"; 
        document.getElementById('start').innerHTML = "Click to start game"; 
        document.getElementById('gameboard').style.backgroundImage = ""; 
    }
    changePos('textbook'); 
    moveBad('switch'); 
    instructions('keyInstructions'); 
}
function changePos(par)
{
    x = Math.floor(Math.random()*4)
    switch (x)
    {
        case 0: 
        {
            src = "images/book_closed.png"; 
            break; 
        }
        case 1: 
        {
            src = "images/book_closed_2.png"; 
            break; 
        }
        case 2: 
        {
            src = "images/book_closed_3.png"; 
            break; 
        }
        case 3: 
        {
            src = "images/book_closed_4.png"; 
            break; 
        }
    }
    document.getElementById(par).src = src;
    book_top = Math.floor(Math.random()*540 + 90); 
    book_left = Math.floor(Math.random()*720 + 110); 
    document.getElementById(par).style.position = 'absolute'; 
    document.getElementById(par).style.left = book_left + 'px'; 
    document.getElementById(par).style.top = book_top + 'px';  
    if ((score < 0) || (score === 10))
    {
       ; 
    }
    else 
    {
        setTimeout(function(){changePos('textbook'); }, 6000);
    } 
}
function moveBad(par)
{
    document.getElementById(par).style.position = "absolute"; 
    if ( (swtch_top < 0) || (swtch_top > 630) )
    {
        swtch_top = 90;  
        swtch_left = Math.floor(Math.random()*730 + 110); 
    }
    else
    {
        x = Math.floor(Math.random()*30 + 10)
        swtch_top += x; 
    }
    document.getElementById(par).style.top = swtch_top + "px"; 
    document.getElementById(par).style.left = swtch_left + "px"; 
    loseLife();
    if ((score < 0) || (score === 10))
    {
        ; 
    }
    else 
    {
        setTimeout(function(){moveBad('switch'); }, 600); 
    } 
}
function moveRight(par)
{
    document.getElementById(par).src = "images/student.png";  
    document.getElementById('student').style.height = "150px";  
    if ( h_left < 750)
    {
        h_left += 10; 
        getPoints();
        document.getElementById(par).style.position = "absolute"; 
        document.getElementById(par).style.left = h_left + "px"; 
    }
}
function moveLeft(par)
{
    document.getElementById(par).src = "images/student_fliped.png"; 
    document.getElementById('student').style.height = "150px"; 
    if ( h_left > 60)
    {
        h_left -= 10; 
        document.getElementById(par).style.position = "absolute"; 
        document.getElementById(par).style.left = h_left + "px"; 
        getPoints();
    }
}
function moveUp(par)
{
    x = document.getElementById('student').getAttribute('src'); 
    if ( x === "images/lostScream.png" )
    {
        document.getElementById(par).src = "images/student.png"; 
        document.getElementById('student').style.height = "150px"; 
    }
    if ( h_top > 80)
    {
        h_top -= 10; 
        document.getElementById(par).style.position = "absolute"; 
        document.getElementById(par).style.top = h_top + "px"; 
        getPoints();
    }
}
function moveDown(par)
{
    x = document.getElementById('student').getAttribute('src'); 
    if ( x === "images/lostScream.png" )
    {
        document.getElementById(par).src = "images/student.png"; 
        document.getElementById('student').style.height = "150px"; 
    }
    if (h_top < 540)
    {
        h_top += 10; 
        document.getElementById(par).style.position = "absolute"; 
        document.getElementById(par).style.top = h_top + "px"; 
        getPoints();
    }
    
}
function checkScore()
{
    x = "Your current score is " + score.toString() + ". "; 
    alert(x); 
}
function getKeys(par)
{
    if (par.keyCode === 39)
    {
        moveRight('student'); 
    }
    else if (par.keyCode === 37)
    {
        moveLeft('student'); 
    }
    else if (par.keyCode === 38)
    {
        moveUp('student'); 
    }
    else if (par.keyCode === 40)
    {
        moveDown('student'); 
    }
    else if (par.keyCode === 83)
    {
        checkScore(); 
    }
}
function lose()
{
    if (score < 0)
    {
        alert("You lose. TOO MUCH video game during final week!!"); 
        document.getElementById('start').style.backgroundColor = "skyblue"; 
        document.getElementById('start').value = "Restart game"; 
    }
}
function win()
{
    if (score === 10)
    {
        alert("You win. You're well prepared for you final exams!!"); 
        document.getElementById('start').style.backgroundColor = "yellow"; 
        document.getElementById('start').value = "Restart game"; 
        document.getElementById('gameboard').style.backgroundImage = "url(images/win.gif)";
        document.getElementById('gameboard').style.backgroundSize = "cover";
        document.getElementById('gameboard').style.backgroundPosition = "center"; 
    }
}
function instructions(par)
{ 
    if (ins === 0)
    {
        ins = 1; 
        document.getElementById(par).innerHTML = "*Review your books for at least 10 times to get prepared for your final week. "
    }
    else if (ins === 1)
    {
        ins = 2; 
        document.getElementById(par).innerHTML = "*Press \"&#8593\" \"&#8595\" \"&#8592\" \"&#8594\" to control your movement, and press \"s\" to check you score. "
    }
    else if (ins === 2)
    {
        ins = 3; 
        document.getElementById(par).innerHTML = "*Dodge swtich to supress your urge to play games!! "
    }
    else if (ins === 3)
    {
        ins = 0; 
        document.getElementById(par).innerHTML = "*Go to your textbooks, read and study hard!!"
    }
    setTimeout(function(){instructions(par); }, 7200)
}