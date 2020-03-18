/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @class Food
 * @extends GameElement
 * Food element part of gameplay.
 */
class Food extends GameElement {
    /**
     * Class constructor.
     * @param widthLimit number Playground width
     * @param heightLimit number Playground height
     */
    constructor(widthLimit, heightLimit) {
        let x = Math.floor(Math.random() * widthLimit);
        let y = Math.floor(Math.random() * heightLimit);
        super(x, y, Food.INNERCOLOR, Food.OUTERCOLOR);
    }
}
Food.INNERCOLOR = 'red';
Food.OUTERCOLOR = 'black';
