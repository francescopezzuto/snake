/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Game {
    private _gameContainer: HTMLElement;
    private _gameLayer: Layer;
    private _uiLayer: Layer;

    private mouseReference = {
        x: 0,
        y: 0,
        pressed: false
    };

    private _gameSet: boolean;
    private _snake: Snake;
    private _snakeDirection: 'up' | 'right' | 'down' | 'left';
    private _changingDirection: boolean;
    private _snakeHasEaten: boolean;
    private _food: Food;
    private _points: number;
    private _gamePaused: boolean;

    constructor(gameContainer: HTMLElement) {
        this._gameContainer = gameContainer;

        this._gameLayer = new Layer(gameContainer, 'playground');
        this._uiLayer = new Layer(gameContainer, 'ui');

        this._uiLayer.fillColor = '#4c4f5a';
        this._gameLayer.fillColor = '#4c4f5a';

        this.initUILayer();
    }

    initUILayer() {
        let animate = () => {
            requestAnimationFrame(animate);
            this._uiLayer.update();
            this._uiLayer.render();
        };

        requestAnimationFrame(animate);
    }

    set snakeDirection(newDirection: 'up' | 'right' | 'down' | 'left') {
        if (this._changingDirection) return;
        if (this._gamePaused) return;

        this._changingDirection = true;

        if (newDirection === 'up' && this._snakeDirection !== 'down') {
            this._snakeDirection = 'up';
        } else if (
            newDirection === 'right' &&
            this._snakeDirection !== 'left'
        ) {
            this._snakeDirection = 'right';
        } else if (
            newDirection === 'left' &&
            this._snakeDirection !== 'right'
        ) {
            this._snakeDirection = 'left';
        } else if (newDirection === 'down' && this._snakeDirection !== 'up') {
            this._snakeDirection = 'down';
        }
    }

    generateFood() {
        let food = new Food(
            this._gameLayer.playgroundWidth,
            this._gameLayer.playgroundHeight
        );
        while (this._snake.isIn(food)) {
            food = new Food(
                this._gameLayer.playgroundWidth,
                this._gameLayer.playgroundHeight
            );
        }
        return food;
    }

    generateNewGameButton() {
        let newGameButton = new Button(
            this._gameLayer.canvas.width / 2 - 70,
            this._gameLayer.canvas.height / 2 + 23,
            140,
            46,
            'New game',
            37
        );

        newGameButton.setColor('default', {
            text: '#fff',
            border: '#4c4f5a'
        });

        newGameButton.setColor('hover', {
            text: '#fff',
            border: '#fff'
        });

        newGameButton.setColor('active', {
            text: '#fff',
            border: '#fff'
        });

        newGameButton.on('mouseenter', () => {
            this._gameContainer.style.cursor = 'pointer';
        });

        newGameButton.on('mouseleave', () => {
            this._gameContainer.style.cursor = 'default';
        });

        newGameButton.on('click', () => {
            this._uiLayer.fillColor = null;
            this._gameContainer.style.cursor = 'default';
            this.newGame();
        });

        return newGameButton;
    }

    mainMenu() {
        let title = new Label(
            this._gameLayer.canvas.width / 2 - 59,
            this._gameLayer.canvas.height / 2 - 60,
            120,
            120,
            'SNAKE',
            77
        );

        title.color = '#fff';

        this._uiLayer.elements = [title, this.generateNewGameButton()];
    }

    gameOver() {
        let gameoverLabel = new Label(
            this._gameLayer.canvas.width / 2 - 59,
            this._gameLayer.canvas.height / 2 - 60,
            120,
            120,
            'GAME OVER',
            77
        );

        gameoverLabel.color = '#fff';

        this._uiLayer.elements = [
            ...this._uiLayer.elements,
            gameoverLabel,
            this.generateNewGameButton()
        ];
    }

    newGame() {
        this._gameSet = true;

        this._snake = new Snake();
        this._snakeDirection = 'right';
        this._food = this.generateFood();
        this._points = 0;
        this._gameLayer.elements = [...this._snake.body, this._food];
        this._snakeHasEaten = false;
        this._gamePaused = false;

        let pointsLabel = new Label(
            0,
            10,
            this._uiLayer.canvas.width,
            30,
            'Pts: ' + this._points,
            30
        );

        pointsLabel.color = '#fff';

        this._uiLayer.elements = [pointsLabel];

        let play: number;

        let lastTime = 0;
        let animate = (time: number) => {
            play = requestAnimationFrame(animate);

            if (time - lastTime <= 70) return;

            if (this._gamePaused) return;

            lastTime = time;

            this._snake.move(this._snakeDirection, this._snakeHasEaten);
            this._snakeHasEaten = false;
            if (this._snake.ateItself()) {
                console.log('Game over - Points: ', this._points);
                cancelAnimationFrame(play);
                this.gameOver();
            }
            this._snake.headOverflow(
                this._gameLayer.playgroundWidth - 1,
                this._gameLayer.playgroundHeight - 1
            );
            if (this._snake.ate(this._food)) {
                console.log('Snake ate food!');
                this._points += 10;
                this._snakeHasEaten = true;
                console.log('Points: ', this._points);
                pointsLabel.text = 'Pts: ' + this._points;
                this._food = this.generateFood();
            }
            this._gameLayer.elements = [...this._snake.body, this._food];
            this._gameLayer.render();
            this._changingDirection = false;
        };

        play = requestAnimationFrame(animate);
    }

    pauseGame() {
        if (!this._gameSet) return;

        if (this._gamePaused) {
            this._uiLayer.elements.pop();

            this._gamePaused = false;
        } else {
            let pausedLabel = new Label(
                this._gameLayer.canvas.width / 2 - 59,
                this._gameLayer.canvas.height / 2 - 60,
                120,
                120,
                'PAUSED',
                77
            );

            pausedLabel.color = '#fff';

            this._uiLayer.elements = [...this._uiLayer.elements, pausedLabel];

            this._gamePaused = true;
        }
    }
}
