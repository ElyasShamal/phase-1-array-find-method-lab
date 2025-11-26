// code your solution here


function superbowlWin(record){
    const winner = record.find(game => game.result === "W")
    return winner ? winner.year : undefined
}


// Solution two

// function superbowlWin(record){
//     for(const game of record){
//         if (game.result === "W"){
//             return game.year
//         }
//     }
//     return undefined
// }