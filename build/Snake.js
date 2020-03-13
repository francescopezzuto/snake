/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Snake {
    constructor() {
        this._body = [
            new SnakeBodyPart(15, 15, Snake.INNERCOLOR, Snake.BORDERCOLOR),
            new SnakeBodyPart(14, 15, Snake.INNERCOLOR, Snake.BORDERCOLOR),
            new SnakeBodyPart(13, 15, Snake.INNERCOLOR, Snake.BORDERCOLOR),
            new SnakeBodyPart(12, 15, Snake.INNERCOLOR, Snake.BORDERCOLOR),
            new SnakeBodyPart(11, 15, Snake.INNERCOLOR, Snake.BORDERCOLOR)
        ];
    }
    get body() {
        return this._body;
    }
    move(direction, grow) {
        let x = this._body[0].x;
        let y = this._body[0].y;
        switch (direction) {
            case 'up':
                y -= 1;
                break;
            case 'right':
                x += 1;
                break;
            case 'down':
                y += 1;
                break;
            case 'left':
                x -= 1;
                break;
            default:
                break;
        }
        this._body.unshift(new SnakeBodyPart(x, y, Snake.INNERCOLOR, Snake.BORDERCOLOR));
        if (grow === false) {
            this._body.pop();
        }
    }
    headOverflow(widthLimit, heightLimit) {
        let overflows = false;
        let newX = this.body[0].x;
        let newY = this.body[0].y;
        if (this._body[0].x > widthLimit) {
            overflows = true;
            newX = 0;
        }
        else if (this._body[0].x < 0) {
            overflows = true;
            newX = widthLimit;
        }
        else if (this._body[0].y > heightLimit) {
            overflows = true;
            newY = 0;
        }
        else if (this._body[0].y < 0) {
            overflows = true;
            newY = heightLimit;
        }
        if (overflows) {
            this._body.shift();
            this._body.unshift(new SnakeBodyPart(newX, newY, Snake.INNERCOLOR, Snake.BORDERCOLOR));
        }
    }
    isIn(ge) {
        return undefined !== this._body.find(part => part.equal(ge));
    }
    ate(ge) {
        return this._body[0].equal(ge);
    }
    ateItself() {
        return (undefined !==
            this._body.find((part, index) => {
                if (index === 0)
                    return false;
                return part.equal(this._body[0]);
            }));
    }
}
Snake.INNERCOLOR = 'lightgreen';
Snake.BORDERCOLOR = 'black';
