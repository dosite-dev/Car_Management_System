const {carStock} = require ("../db/stock");
generatingRandomPlateNumber = () =>{
    const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers ='0123456789';
    // generate random number
    const randomLetter = letters [Math.floor(Math.random()) * letters.length];
    const randomLetter2 = letters [Math.floor(Math.random()) * letters.length];
    const randomLetter3 = letters [Math.floor(Math.random()) * letters.length];
    const randomLetter4 = letters [Math.floor(Math.random()) * letters.length];
    // generate random number
    const randomNumber1 = numbers [Math.floor(Math.random()) * numbers.length];
    const randomNumber2 = numbers [Math.floor(Math.random()) * numbers.length];
    const randomNumber3 = numbers [Math.floor(Math.random()) * numbers.length];
    
   

    const plateNumber =`${'R'}${'A'}${randomLetter3}${randomNumber1}${randomNumber2}${randomNumber3}${randomLetter4}`;
    return plateNumber;
}
//---------Add new Car--------------------------------------------------------
const add =(newCar) =>{
    carStock.push(newCar);
    console.log("new car added successfully");
    console.log(carStock);


};

module.exports ={
    add,
    generatingRandomPlateNumber,
}