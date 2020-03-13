/**
 * Copyright (c) francescopezzuto
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

abstract class UIElement extends LayerElement {
    static readonly FONT_FAMILY = 'VT323';

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
    }
}
