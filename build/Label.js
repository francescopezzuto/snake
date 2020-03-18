/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @class Label
 * @extends UIElement
 * Label element part of canvas UI.
 */
class Label extends UIElement {
    /**
     * Class constructor.
     * @param x number X coordinate
     * @param y number Y coordinate
     * @param width number Width
     * @param height number Heigth
     * @param text string Text
     * @param fontSize string Font size
     */
    constructor(x, y, width, height, text, fontSize) {
        super(x, y, width, height);
        this._color = '#000';
        this._text = text;
        this._fontSize = fontSize;
    }
    /**
     * Update label color.
     * @param value string New color
     */
    set color(value) {
        this._color = value;
    }
    /**
     * Update label text.
     * @param value string New text
     */
    set text(value) {
        this._text = value;
    }
    /**
     * Update method implementation.
     */
    update() { }
    /**
     * Render label.
     * @param ctx CanvasRenderingContext2D Canvas context
     */
    render(ctx) {
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
