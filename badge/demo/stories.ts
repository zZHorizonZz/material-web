/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/badge/badge.js';
import '@material/web/icon/icon.js';
import '@material/web/button/outlined-button.js';

import {MaterialStoryInit} from './material-collection.js';
import {css, html, nothing} from 'lit';

/** Knob types for badge stories. */
export interface StoryKnobs {
  value: string;
}

const styles = css`
  .row {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .container {
    position: relative;
    display: inline-block;
  }
`;

const standard: MaterialStoryInit<StoryKnobs> = {
  name: 'Badge',
  styles,
  render({value}) {
    return html`
      <div class="row">
        <div class="container">
          <md-outlined-button>Button</md-outlined-button>
          <md-badge .value=${value || nothing}></md-badge>
        </div>

        <div class="container">
          <md-icon>notifications</md-icon>
          <md-badge .value=${value || nothing}></md-badge>
        </div>
      </div>
    `;
  },
};

/** Badge stories. */
export const stories = [standard];
