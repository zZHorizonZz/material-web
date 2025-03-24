/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {CSSResultOrNative} from 'lit';
import {customElement} from 'lit/decorators.js';

import {Table} from './internal/table.js';
import {styles} from './internal/table-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-table': MdTable;
  }
}

/**
 * @summary A table is a component that displays data in rows and columns.
 *
 * @description Tables display information in a way that's easy to scan, so that
 * users can look for patterns and insights.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-table')
export class MdTable extends Table {
  static override styles: CSSResultOrNative[] = [styles];
}