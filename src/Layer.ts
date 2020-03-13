/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class Layer {
    static readonly SCALE: number = 15;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    fillColor: string;

    elements: LayerElement[];

    mouseReference: {
        x: number;
        y: number;
        pressed: boolean;
    };

    constructor(container: HTMLElement, HTMLClass: string) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = Math.random()
            .toString(36)
            .substr(2, 9);
        this.canvas.className = HTMLClass;
        this.canvas.width = 495;
        this.canvas.height = 495;
        container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.bindEvents();
    }

    private bindEvents() {
        this.mouseReference = {
            x: 0,
            y: 0,
            pressed: false
        };
        this.canvas.addEventListener('mousemove', event => {
            this.mouseReference.x = event.offsetX;
            this.mouseReference.y = event.offsetY;
        });

        this.canvas.addEventListener('mousedown', event => {
            this.mouseReference.pressed = true;
        });

        this.canvas.addEventListener('mouseup', event => {
            this.mouseReference.pressed = false;
        });
    }

    get playgroundWidth(): number {
        return Math.floor(this.canvas.width / Layer.SCALE);
    }

    get playgroundHeight(): number {
        return Math.floor(this.canvas.height / Layer.SCALE);
    }

    clearPlayground() {
        if (this.fillColor) {
            this.ctx.fillStyle = this.fillColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = 1;
    }

    clear() {}

    update() {
        this.elements.forEach(element => element.update(this.mouseReference));
    }

    render() {
        this.clearPlayground();
        this.elements.forEach(element => element.render(this.ctx));
    }
}
