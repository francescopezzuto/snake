/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @class GameElement
 * @extends LayerElement
 * A game element part of canvas.
 */
class GameElement extends LayerElement {
    /**
     * Class constructor.
     * @param x number X coordinate
     * @param y number Y coordinate
     * @param innerColor string Fill color
     * @param outerColor string Border color
     */
    constructor(x, y, innerColor, outerColor) {
        super(x, y, GameElement.DIMENSION, GameElement.DIMENSION);
        this._innerColor = innerColor;
        this._outerColor = outerColor;
    }
    /**
     * Get x coordinate.
     * @returns number X coordinate
     */
    get x() {
        return this._x;
    }
    /**
     * Get y coordinate.
     * @returns number Y coordinate
     */
    get y() {
        return this._y;
    }
    /**
     * Check if this game element is equal to another one.
     * @param ge GameELement The othe game element to check
     */
    equal(ge) {
        return this._x === ge._x && this._y === ge._y;
    }
    /**
     * Update method implementation.
     */
    update() { }
    /**
     * Render game element.
     * @param ctx CanvasRenderingContext2D Canvas context
     */
    render(ctx) {
        ctx.fillStyle = this._innerColor;
        ctx.strokeStyle = this._outerColor;
        ctx.fillRect(this._x * GameElement.DIMENSION, this._y * GameElement.DIMENSION, GameElement.DIMENSION, GameElement.DIMENSION);
        ctx.strokeRect(this._x * GameElement.DIMENSION, this._y * GameElement.DIMENSION, GameElement.DIMENSION, GameElement.DIMENSION);
    }
}
GameElement.DIMENSION = 20;
