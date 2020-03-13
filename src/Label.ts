/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Label extends UIElement {
    private _text: string;
    private _fontSize: number;
    private _color = '#000';

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        fontSize: number
    ) {
        super(x, y, width, height);
        this._text = text;
        this._fontSize = fontSize;
    }

    set color(value: string) {
        this._color = value;
    }

    set text(value: string) {
        this._text = value;
    }

    update() {}

    render(ctx: CanvasRenderingContext2D) {
        ctx.font = this._fontSize + 'px ' + UIElement.FONT_FAMILY;

        ctx.save();

        let size = ctx.measureText(this._text);
        let x = this._x + (this._width - size.width) / 2;
        let y = this._y + (this._height - 15) / 2 + 12;

        ctx.fillStyle = this._color;
        ctx.fillText(this._text, x, y);

        ctx.restore();
    }
}
