 const carStock = require("./controller/car management");
 const {add,generatingRandomPlateNumber}=carStock;
 //--------Add new Car--------------------------------

 var newCar ={
    plateNumber:generatingRandomPlateNumber(),
        model:"BMMX3",
        manufacturingYear:2003,
        color:"Red",
        cost:"26M Rwf",


 }
 add(newCar);
 