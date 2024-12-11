class Game {
    constructor() {
        this.locations = {
            'forest': 'You are in a lush green forest. You can see paths leading north and east.',
            'clearing': 'You arrive at a sunny clearing with a beautiful pond. There is a path leading south.',
            'cave': 'You find yourself in a dark cave. It is damp and you can hear water dripping. There is a path leading west.',
            'village': 'You are in a small village. The villagers greet you warmly. There is a path leading south.'
        };
        this.currentLocation = 'forest';
        this.inventory = [];
        this.updateGameOutput();
    }

    updateGameOutput() {
        const gameOutput = document.getElementById('game-output');
        gameOutput.innerHTML = `<p>${this.locations[this.currentLocation]}</p>`;
        if (this.inventory.length > 0) {
            gameOutput.innerHTML += `<p>You have: ${this.inventory.join(', ')}</p>`;
        }
    }

    move(direction) {
        if (this.currentLocation === 'forest') {
            if (direction === 'north') {
                this.currentLocation = 'clearing';
            } else if (direction === 'east') {
                this.currentLocation = 'cave';
            } else {
                return "You can't go that way.";
            }
        } else if (this.currentLocation === 'clearing') {
            if (direction === 'south') {
                this.currentLocation = 'forest';
            } else {
                return "You can't go that way.";
            }
        } else if (this.currentLocation === 'cave') {
            if (direction === 'west') {
                this.currentLocation = 'forest';
            } else {
                return "You can't go that way.";
            }
        } else if (this.currentLocation === 'village') {
            if (direction === 'south') {
                this.currentLocation = 'clearing';
            } else {
                return "You can't go that way.";
            }
        }
        this.updateGameOutput();
    }

    interact() {
        if (this.currentLocation === 'clearing') {
            this.inventory.push('magical flower');
            return "You see a friendly fairy. She offers you a magical flower.";
        } else if (this.currentLocation === 'village') {
            return "The villagers tell you stories of the forest and offer you food.";
        } else {
            return "There's nothing to interact with here.";
        }
    }

    reset() {
        this.currentLocation = 'forest';
        this.inventory = [];
        this.updateGameOutput();
    }
}

const game = new Game();

document.getElementById('submit-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const commandParts = userInput.split(' ');
    const command = commandParts[
