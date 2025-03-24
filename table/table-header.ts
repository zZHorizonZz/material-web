/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {CSSResultOrNative} from 'lit';
import {customElement} from 'lit/decorators.js';

import {TableHeader} from './internal/table.js';
import {styles} from './internal/table-header-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-table-header': MdTableHeader;
  }
}

/**
 * @summary A table header is a component that displays the header row of a table.
 *
 * @description Table headers provide a way to label columns in a table.
 *
 * @final
 * @suppress {visibility}
 */
@customElement('md-table-header')
export class MdTableHeader extends TableHeader {
  static override styles: CSSResultOrNative[] = [styles];
}