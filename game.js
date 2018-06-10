//value that a user can input (if a prompt statment has been introduced)

var userQuestion = prompt("What question do you have for the magic eightball?");

document.getElementById("userQuestion").innerHTML = userQuestion;

//Time to Create the Answers. First, randomness shall be created using Math.random()
var randomNumber = Math.floor(Math.random() * 8);

//will set the value of this variable in the next time. The value will depend on the random number chosen. This is done via ControlFlow 
var eightBall = "";

//control flow: randomNumber assigns eightBall with an value(answer) 


switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;

    case 1:
        eightBall = "It is decidedly so";
        break;

    case 2:
        eightBall = "Reply hazy. Try again.";
        break;

    case 3:
        eightBall = "Cannot predict now.";
        break;

    case 4:
        eightBall = "Do not count on it";
        break;

    case 5:
        eightBall = "My sources say no.";
        break;

    case 6:
        eightBall = "Outlook not so good.";
        break;

    case 7:
        eightBall = "Signs point to yes.";
        break;

}

document.getElementById("answer").innerHTML = eightBall;