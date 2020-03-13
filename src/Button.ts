/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Button extends UIElement {
    private _text: string;
    private _fontSize: number;
    private _colors = {
        default: {
            text: '#fff',
            border: '#000'
        },
        hover: {
            text: '#fff',
            border: '#fff'
        },
        active: {
            text: '#fff',
            border: '#fff'
        }
    };

    private _state: 'default' | 'hover' | 'active';
    private _isClicking: boolean;

    private _events: { [key: string]: Function };

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

        this._state = 'default';
        this._isClicking = false;
        this._events = {};
    }

    setColor(type: string, { text = '#fff', border = '#000' }) {
        this._colors[type].text = text;
        this._colors[type].border = border;
    }

    on(event: string, callback: Function) {
        this._events[event] = callback;
    }

    update(mouseReference: { x: number; y: number; pressed: boolean }) {
        if (
            mouseReference.x >= this._x &&
            mouseReference.x <= this._x + this._width &&
            mouseReference.y >= this._y &&
            mouseReference.y <= this._y + this._height
        ) {
            this._state = 'hover';

            if (typeof this._events.mouseenter === 'function') {
                this._events.mouseenter();
            }

            if (mouseReference.pressed) {
                this._state = 'active';

                if (!this._isClicking) {
                    if (typeof this._events.click === 'function') {
                        this._events.click();
                    }
                    this._isClicking = true;
                }
            } else {
                this._isClicking = false;
            }
        } else {
            this._state = 'default';

            if (typeof this._events.mouseleave === 'function') {
                this._events.mouseleave();
            }
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.font = this._fontSize + 'px ' + UIElement.FONT_FAMILY;

        ctx.save();

        let colors = this._colors[this._state];

        ctx.strokeStyle = colors.border;
        ctx.lineWidth = 3;
        ctx.strokeRect(this._x, this._y, this._width, this._height);

        let size = ctx.measureText(this._text);
        let x = this._x + (this._width - size.width) / 2;
        let y = this._y + (this._height - 15) / 2 + 17;

        ctx.fillStyle = colors.text;
        ctx.fillText(this._text, x, y);

        ctx.restore();
    }
}
