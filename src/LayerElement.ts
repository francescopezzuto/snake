/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @class LayerElement
 * @abstract
 * Element contained in a Layer object.
 */
abstract class LayerElement {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;

    /**
     * Class constructor.
     * @param x number X coordinate
     * @param y number Y coordinate
     * @param width number Width
     * @param height number Height
     */
    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    /**
     * Update LayerElement object.
     * @abstract
     * @param mouseReference Mouse reference object: { x: number, y: number, pressed: number }
     */
    abstract update(mouseReference: {
        x: number;
        y: number;
        pressed: boolean;
    }): void;

    /**
     * Render LayerElement object.
     * @abstract
     * @param ctx CanvasRenderingContext2D Canvas context
     */
    abstract render(ctx: CanvasRenderingContext2D): void;
}
