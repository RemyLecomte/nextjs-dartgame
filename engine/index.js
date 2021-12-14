const scanf = require('scanf');

class Game {
    constructor(nbPlayers) {
        this.players = new Array(nbPlayers)
    }
    
    getPlayerNumbers() {
        return this.players.length
    }
}
function askNBPlayers(){
    console.log('Pleas input nb');
    const nb = scanf('%d');
    return nb
}

const nb = askNBPlayers()
const game = new Game(nb)
console.log(game.players.length)