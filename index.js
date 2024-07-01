// Write your code here
function superbowlWin(results) {
    const win = results.find(function(game){
        return game.result === "W";
    });
    
    if(win) {
        return win.year;
    }else {
        return undefined;
    }
}

