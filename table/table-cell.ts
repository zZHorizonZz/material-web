/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {CSSResultOrNative} from 'lit';
import {customElement} from 'lit/decorators.js';

import {TableCell} from './internal/table.js';
import {styles} from './internal/table-cell-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-table-cell': MdTableCell;
  }
}

/**
 * @summary A table cell is a component that displays a cell of data in a table.
 *
 * @description Table cells provide a way to display data in a table.
 * They can be regular data cells or header cells.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-table-cell')
export class MdTableCell extends TableCell {
  static override styles: CSSResultOrNative[] = [styles];
}