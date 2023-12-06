 const carStock = require("./controller/car management");
 const {add,generatingRandomPlateNumber,deletingCar}=carStock;
 //--------Add new Car--------------------------------

 var newCar ={
    plateNumber:generatingRandomPlateNumber(),
        model:"BMMX3",
        manufacturingYear:2003,
        color:"Red",
        cost:"26M Rwf",


 }
 add(newCar);
 //-------------------------------- deleting car--------------------------------
 deletingCar('URD201W');
 //--------------------------------update car--------------------------------
updateCars ("RAD801A","color","purple");

 