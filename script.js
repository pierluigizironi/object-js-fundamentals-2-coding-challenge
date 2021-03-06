/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 78,
    height: 1.69,
    calcBMI: function(weight, height) {
        johnBMI = this.weight / this.height ** 2
        return johnBMI
    }
}

console.log(john.calcBMI(john.weight, john.height))

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 92,
    height: 1.95,
    calcBMI: function(weight, height) {
        markBMI = this.weight / this.height ** 2
        return markBMI
    }
}

console.log(mark.calcBMI(mark.weight, mark.height))

johnBMI > markBMI ? console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI(john.weight, john.height)}) is highter than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI(mark.weight, mark.height)})`) : console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI(mark.weight, mark.height)}) is highter than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI(john.weight, john.height)})`)