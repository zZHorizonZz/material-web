/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';

/**
 * A table component.
 */
export class Table extends LitElement {
  /**
   * Renders the table content.
   */
  protected override render() {
    return html`
      <slot></slot>
    `;
  }
}

/**
 * A table header component.
 */
export class TableHeader extends LitElement {
  /**
   * Renders the table header content.
   */
  protected override render() {
    return html`
      <slot></slot>
    `;
  }
}

/**
 * A table row component.
 */
export class TableRow extends LitElement {
  /**
   * Renders the table row content.
   */
  protected override render() {
    return html`
      <slot></slot>
    `;
  }
}

/**
 * A table cell component.
 */
export class TableCell extends LitElement {
  /**
   * Whether this cell is a header cell.
   */
  @property({type: Boolean, reflect: true}) header = false;

  /**
   * Renders the table cell content.
   */
  protected override render() {
    return html`
      <slot></slot>
    `;
  }
}