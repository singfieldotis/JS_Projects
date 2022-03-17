// This is a stupid application that just generates a a random number and presents it to the user as a percentage
// Names are there for aesthetic reasons to offer the guise of being a love calculator

name1 = prompt("What is your name?");
name2 = prompt("What is your lover's name?");

var loveScore = Math.random() * 100; 

loveScore = Math.floor(loveScore) + 1; // 1 - 100 

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "% " + "You love each other like Kanye loves Kanye.");
} 
if (loveScore>30 && loveScore<=70) {
  alert("Your love score is " + loveScore + "%");
}
if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
};