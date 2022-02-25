import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let newGame: Game;

// add click handler to start the game button
document.getElementById('startGame')!.addEventListener('click', () => {

    const player: Player = new Player();
    player.name = Helpers.getValue('playerName');

    const problemcount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemcount, factor);
    newGame.displayGame();
});

// add click handler to calculate the score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})