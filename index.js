// code your solution here


function superbowlWin(record){
    const winner = record.find(game => game.result === "W")
    return winner ? winner.year : undefined
}