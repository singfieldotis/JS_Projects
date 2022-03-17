// create an app that prompts user for their name and compares it to a list of names to see if the user is on the list
// if yes prompt "Welcome"
// if not promp "You are not on the list"

var guests = ["Otis", "Chelsea", "Addie", "Bubba", "Fred", "Sarrah", "Blade", "Steven"];

var guestName = prompt("What is your name?");

if (guests.includes(user)) {
  alert ("Welcome!")
} else {
  alert("You are not on the list!")
}