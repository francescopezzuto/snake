/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @class Controller
 * Listen for keyboard event and transmits them to the game.
 */
class Controller {
    static readonly UP_KEY: string[] = ['ArrowUp', 'w', 'W'];
    static readonly RIGHT_KEY: string[] = ['ArrowRight', 'd', 'D'];
    static readonly LEFT_KEY: string[] = ['ArrowLeft', 'a', 'A'];
    static readonly DOWN_KEY: string[] = ['ArrowDown', 's', 'S'];
    static readonly SPACE_KEY: string[] = [' '];

    private _game: Game;

    /**
     * Class constructor.
     * @param game Game object
     */
    constructor(game: Game) {
        this._game = game;
        document.onkeyup = event => this.keyboardDispatcher(event);
    }

    /**
     * Manages a keyboard event.
     * @param event KeyboardEvent Keyboard event
     */
    keyboardDispatcher(event: KeyboardEvent) {
        let keyPressed = event.key;

        if (Controller.UP_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'up';
        } else if (Controller.RIGHT_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'right';
        } else if (Controller.LEFT_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'left';
        } else if (Controller.DOWN_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'down';
        } else if (Controller.SPACE_KEY.indexOf(keyPressed) !== -1) {
            this._game.pauseGame();
        }
    }
}
