/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class GameElement extends LayerElement {
    static readonly DIMENSION: number = 15;

    private _innerColor: string;
    private _outerColor: string;

    constructor(
        x: number,
        y: number,
        _innerColor: string,
        _outerColor: string
    ) {
        super(x, y, GameElement.DIMENSION, GameElement.DIMENSION);
        this._innerColor = _innerColor;
        this._outerColor = _outerColor;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    equal(ge: GameElement) {
        return this._x === ge._x && this._y === ge._y;
    }

    update() {}

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this._innerColor;
        ctx.strokeStyle = this._outerColor;
        ctx.fillRect(
            this._x * GameElement.DIMENSION,
            this._y * GameElement.DIMENSION,
            GameElement.DIMENSION,
            GameElement.DIMENSION
        );
        ctx.strokeRect(
            this._x * GameElement.DIMENSION,
            this._y * GameElement.DIMENSION,
            GameElement.DIMENSION,
            GameElement.DIMENSION
        );
    }
}
