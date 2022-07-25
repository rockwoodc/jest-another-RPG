//the game needs access to these to run
const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    //the properties the game logic needs to have
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    //to keep track of which Enemy object is currently fighting the Player. When the game starts, this would be the first object in the array.
    this.currentEnemy = this.enemies[0];;


inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    //destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        //test the object creature
        console.log(this.startNewBattle());
    });
};
module.exports = Game;