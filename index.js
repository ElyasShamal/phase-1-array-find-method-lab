// code your solution here


const superbowlWin = (array) =>  { 
    if (array.find(obj => obj.result === "W")) {
        return array.find(obj => obj.result === "W").year
     } else {
        return undefined;
     }
}