/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class GameElement extends LayerElement {
    constructor(x, y, _innerColor, _outerColor) {
        super(x, y, GameElement.DIMENSION, GameElement.DIMENSION);
        this._innerColor = _innerColor;
        this._outerColor = _outerColor;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    equal(ge) {
        return this._x === ge._x && this._y === ge._y;
    }
    update() { }
    render(ctx) {
        ctx.fillStyle = this._innerColor;
        ctx.strokeStyle = this._outerColor;
        ctx.fillRect(this._x * GameElement.DIMENSION, this._y * GameElement.DIMENSION, GameElement.DIMENSION, GameElement.DIMENSION);
        ctx.strokeRect(this._x * GameElement.DIMENSION, this._y * GameElement.DIMENSION, GameElement.DIMENSION, GameElement.DIMENSION);
    }
}
GameElement.DIMENSION = 15;
