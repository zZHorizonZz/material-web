/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {CSSResultOrNative} from 'lit';
import {customElement} from 'lit/decorators.js';

import {TableRow} from './internal/table.js';
import {styles} from './internal/table-row-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-table-row': MdTableRow;
  }
}

/**
 * @summary A table row is a component that displays a row of data in a table.
 *
 * @description Table rows provide a way to organize data in a table.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-table-row')
export class MdTableRow extends TableRow {
  static override styles: CSSResultOrNative[] = [styles];
}