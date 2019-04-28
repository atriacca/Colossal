/*
Project Requirements:
Console must greet player with a fun message
Console must ask for the player's name and store it
Walking:
The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
If a wild enemy appears:
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, you will choose a random attack power between a min and max
If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
If the enemy kills the player the console prints an cool death message and the game ends
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory



You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name - Monster name
Job title  
Salary - strength
Status - 
First, you will create an array named employees

Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

You will then:

Instantiate three employees
Override the status attribute of one of them to either "Part Time" or "Contract"
Call the printEmployeeForm method for each employee
Put the generated employees into the employees array using whichever method you prefer.
Here's a refresher for the constructor syntax:

function Car (year, make, model) {
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myTacoma = new Car(2015, "Toyota", "Tacoma");
*/