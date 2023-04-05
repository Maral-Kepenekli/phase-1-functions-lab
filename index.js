// Code your solution in this file! ``

function distanceFromHqInBlocks(pickupLocationBlock) {
 const ScuberHQ = 42;
 const distanceBlocks = (ScuberHQ - pickupLocationBlock);
 if (distanceBlocks < 0) {
  return ~(distanceBlocks) + 1;;
 } else {
  return distanceBlocks;
 }
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(pickupLocationFeet) {
 const ScuberHQ = 42;
 const distanceFeet = (ScuberHQ - pickupLocationFeet) * 264;
 if (distanceFeet < 0) {
  return ~(distanceFeet) + 1;
 } else {
  return distanceFeet;
 }
}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(startBlock, destinationBlock) {
 const travelledInFeet = Math.abs(startBlock - destinationBlock) * 264;
 return travelledInFeet;
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination) {
 const calculateTravel = distanceTravelledInFeet(start, destination);

 switch (true) {
  case (calculateTravel <= 400):
   return 0;
  case (calculateTravel > 400 && calculateTravel <= 2000):
   return (calculateTravel - 400) * 0.02;
  case (calculateTravel > 2000 && calculateTravel < 2500):
   return 25;
  default:
   return "cannot travel that far";
 }


 function distanceTravelledInFeet(startBlock, destinationBlock) {
  const travelledInFeet = Math.abs(startBlock - destinationBlock) * 264;
  return travelledInFeet;
 }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));