/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @class SnakeBodyPart
 * @extends GameElement
 * Part of a snake body.
 */
class SnakeBodyPart extends GameElement {
    /**
     * Class constructor.
     * @param x number X coordinate
     * @param y number Y coordinate
     * @param innerColor string Internal color
     * @param outerColor string Border color
     */
    constructor(x: number, y: number, innerColor: string, outerColor: string) {
        super(x, y, innerColor, outerColor);
    }
}
