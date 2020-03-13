/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

abstract class LayerElement {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    abstract update(mouseReference: {
        x: number;
        y: number;
        pressed: boolean;
    }): void;

    abstract render(ctx: CanvasRenderingContext2D): void;
}
