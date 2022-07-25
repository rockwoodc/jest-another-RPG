const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random()* 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];

    // returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
      
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
      };

      //checks to see if the player is alive
    Player.prototype.isAlive = function () {
        if (this.health === 0) {
            return false;
        }
        return true;
    };
};

//get health method
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.reduceHealth = function (health) {
    this.health -= health;
    //ensure that health never goes into the negative
    if (this.health < 0) {
        this.health = 0;
    }
}

  
module.exports = Player;