/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @class UIElement
 * @abstract
 * @extends LayerElement
 * Game UI element.
 */
abstract class UIElement extends LayerElement {
    static readonly FONT_FAMILY = 'VT323';

    /**
     * Class constructor.
     * @param x number X coordinate
     * @param y number Y coordinate
     * @param width number Width
     * @param height number Height
     */
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
    }
}
