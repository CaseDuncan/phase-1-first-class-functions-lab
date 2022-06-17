// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const newarr = drivers.slice(0, 2)
// console.log(newarr)

const returnFirstTwoDrivers =function(drivers){
    // const newdrivers =drivers.slice(0, 2)
    
    // console.log(newdrivers)
        return drivers.slice(0, 2);
   
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
