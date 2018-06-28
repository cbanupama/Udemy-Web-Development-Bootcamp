var secretNumber = 4;
 
var GuessingNumber = Number(prompt("Guees a number?"));
if(GuessingNumber === secretNumber)
{
	alert("You got it right");
}
else if(GuessingNumber > secretNumber)
{
	alert("too high..Guess Again ");
}
else if(GuessingNumber < secretNumber)
{
	alert("too low.. Guess Again");
}
