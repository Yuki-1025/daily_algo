// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

var maximumUnits = function(boxTypes, truckSize) {
  // sort boxes by its unites cap
  boxTypes.sort((a, b) => b[1] - a[1]);
  //
  var res = 0;
  for (let box of boxTypes) {
      if (box[0] >= truckSize) {
          res += box[1] * truckSize;
          break;
      } else {
          res += box[1] * box[0];
          truckSize -= box[0];
      }
  }
  return res;
};

