/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Controller {
    constructor(game) {
        this._game = game;
        document.onkeyup = event => this.keyboardDispatcher(event);
    }
    keyboardDispatcher(event) {
        let keyPressed = event.key;
        if (Controller.UP_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'up';
        }
        else if (Controller.RIGHT_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'right';
        }
        else if (Controller.LEFT_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'left';
        }
        else if (Controller.DOWN_KEY.indexOf(keyPressed) !== -1) {
            this._game.snakeDirection = 'down';
        }
        else if (Controller.SPACE_KEY.indexOf(keyPressed) !== -1) {
            this._game.pauseGame();
        }
    }
}
Controller.UP_KEY = ['ArrowUp', 'w', 'W'];
Controller.RIGHT_KEY = ['ArrowRight', 'd', 'D'];
Controller.LEFT_KEY = ['ArrowLeft', 'a', 'A'];
Controller.DOWN_KEY = ['ArrowDown', 's', 'S'];
Controller.SPACE_KEY = [' '];
