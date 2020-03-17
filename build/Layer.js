/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Layer {
    constructor(container, HTMLClass) {
        this.canvas = document.createElement('canvas');
        if (!(this.canvas.getContext && this.canvas.getContext('2d'))) {
            let ad = document.createElement('span');
            ad.innerHTML = 'Your browser does not support HTML canvas.';
            container.appendChild(ad);
            throw new Error('Canvas not supported');
        }
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
    bindEvents() {
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
    get playgroundWidth() {
        return Math.floor(this.canvas.width / Layer.SCALE);
    }
    get playgroundHeight() {
        return Math.floor(this.canvas.height / Layer.SCALE);
    }
    clearPlayground() {
        if (this.fillColor) {
            this.ctx.fillStyle = this.fillColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = 1;
    }
    clear() { }
    update() {
        this.elements.forEach(element => element.update(this.mouseReference));
    }
    render() {
        this.clearPlayground();
        this.elements.forEach(element => element.render(this.ctx));
    }
}
Layer.SCALE = 15;
