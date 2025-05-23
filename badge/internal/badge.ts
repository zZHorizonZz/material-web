/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

/**
 * b/265340196 - add docs
 */
export class Badge extends LitElement {
  @property() value = '';

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('value')) {
      if (this.value) {
        this.setAttribute('aria-label', this.value);
      } else {
        this.removeAttribute('aria-label');
      }
    }
  }

  protected override render() {
    const classes = {'md3-badge--large': !!this.value}; // Ensure boolean conversion for classMap

    return html`<div class="md3-badge ${classMap(classes)}">
      <p class="md3-badge__value">${this.value}</p>
    </div>`;
  }
}
