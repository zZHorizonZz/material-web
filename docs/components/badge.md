<!-- catalog-only-start --><!-- ---
name: Badge
dirname: badge
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Badge

<!-- no-catalog-start -->

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2024-05-15' }
tag: 'docType:reference'
*-->

<!-- go/md-badge -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/badge/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Badges](https://m3.material.io/components/badges)<!-- {.external} --> are used to
convey dynamic information, such as a count or status. They are typically placed
next to an icon or text.

There are two types of badges: standard (with optional label) and small (dot).

</catalog-component-header-title>

<img
    class="hero"
    alt="A bell icon with a badge displaying the number 7, and a mail icon with a dot badge."
    title="Badges can display a count or a simple dot for status."
    src="images/badge/hero.png"> <!-- TODO: Update with actual hero image -->

</catalog-component-header>

*   [Design article](https://m3.material.io/components/badges) <!-- {.external} -->
*   [API Documentation](#api)
*   [Source code](https://github.com/material-components/material-web/tree/main/badge)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Types

<!-- no-catalog-start -->

![Standard badge with the number 7 and a small dot badge.](images/badge/types.png "Standard and small (dot) badges.") <!-- TODO: Update with actual types image -->

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      class="types-image"
      style="justify-content:center;"
      title="Standard and small (dot) badges"
      aria-label="Standard badge with the number 7 and a small dot badge.">
    <style>
      .types-image .wrapper {
        display: flex;
        padding: 8px;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        align-items: center;
      }
      .types-image .container {
        position: relative;
        display: inline-block;
      }
      .types-image .container md-icon {
        font-size: 32px; /* Make icon larger for visibility */
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <md-icon>notifications</md-icon>
        <md-badge value="7"></md-badge>
      </div>
      <div class="container">
        <md-icon>mail</md-icon>
        <md-badge></md-badge>
      </div>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

1.  [Standard badge](#standard-badge)
2.  [Small (dot) badge](#small-dot-badge)

## Usage

Badges are typically placed in the top-trailing corner of an element.

<!-- no-catalog-start -->

![A chat icon with a badge displaying "99+"](images/badge/usage.png "Badge on a chat icon.") <!-- TODO: Update with actual usage image -->

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px; align-items: center;"
      title="Badge on a chat icon."
      aria-label="A chat icon with a badge displaying '99+'">
    <div style="position:relative; display:inline-block;">
      <md-icon style="font-size: 32px;">chat</md-icon>
      <md-badge value="99+"></md-badge>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<div style="position:relative; display:inline-block;">
  <md-icon>chat</md-icon>
  <md-badge value="99+"></md-badge>
</div>
```

### Standard badge

Standard badges display a short text string, such as a number or a few
characters. If the text is too long, it will be truncated.

<!-- no-catalog-start -->

![A standard badge displaying "New"](images/badge/usage-standard.png) <!-- TODO: Update with actual standard badge image -->

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px; align-items: center;"
      title="Standard badge examples."
      aria-label="A standard badge displaying 'New' and another displaying '12'.">
    <div style="position:relative; display:inline-block;">
      <md-outlined-button>Inbox</md-outlined-button>
      <md-badge value="New"></md-badge>
    </div>
    <div style="position:relative; display:inline-block;">
      <md-icon style="font-size: 32px;">drafts</md-icon>
      <md-badge value="12"></md-badge>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<div style="position:relative; display:inline-block;">
  <md-outlined-button>Inbox</md-outlined-button>
  <md-badge value="New"></md-badge>
</div>

<div style="position:relative; display:inline-block;">
  <md-icon>drafts</md-icon>
  <md-badge value="12"></md-badge>
</div>
```

### Small (dot) badge

Small badges, also known as "dot" badges, are used to indicate a status or
notification without a specific count. They appear as a small dot.

<!-- no-catalog-start -->

![A small dot badge on an account icon.](images/badge/usage-dot.png) <!-- TODO: Update with actual dot badge image -->

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;gap: 8px; align-items: center;"
      title="Small (dot) badge example."
      aria-label="An account icon with a small dot badge.">
    <div style="position:relative; display:inline-block;">
      <md-icon style="font-size: 32px;">account_circle</md-icon>
      <md-badge></md-badge> <!-- No value creates a dot badge -->
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<div style="position:relative; display:inline-block;">
  <md-icon>account_circle</md-icon>
  <md-badge></md-badge> <!-- No value creates a dot badge -->
</div>
```

## Accessibility

When a badge has a `value`, it will automatically be used as the `aria-label`.
If the badge is a dot badge (no `value`), it will not have an `aria-label` by
default, as it is a purely visual indicator. You should provide an
`aria-label` on the parent element or a nearby element to describe the meaning
of the dot badge.

For example, if a dot badge indicates new notifications, the icon button it's
attached to could have an `aria-label` like "Notifications (new items)".

Changes to the badge `value` are announced to screen readers via an
`aria-live` region.

## Theming

Badge supports [Material theming](../theming/README.md) and can be customized
in terms of color, typography, and shape.

### Badge tokens

Token                                   | Default value
--------------------------------------- | -------------------------------------------------
`--md-badge-color`                      | `--md-sys-color-error`
`--md-badge-label-text-color`           | `--md-sys-color-on-error`
`--md-badge-label-text-font`            | `--md-sys-typescale-label-small-font` <!-- Verify this token -->
`--md-badge-label-text-size`            | `--md-sys-typescale-label-small-size` <!-- Verify this token -->
`--md-badge-label-text-line-height`     | `--md-sys-typescale-label-small-line-height` <!-- Verify this token -->
`--md-badge-label-text-weight`          | `--md-sys-typescale-label-small-weight` <!-- Verify this token -->
`--md-badge-large-color`                | `--md-sys-color-error`
`--md-badge-large-label-text-color`     | `--md-sys-color-on-error`
`--md-badge-large-label-text-font`      | `--md-sys-typescale-label-small-font`
`--md-badge-large-label-text-size`      | `12px` <!-- MD3 Spec: 11sp, current: 12px -->
`--md-badge-large-label-text-line-height`| `16px` <!-- MD3 Spec: 16sp, current: 16px -->
`--md-badge-large-label-text-weight`    | `Next Medium` <!-- MD3 Spec: M3/label/small -->
`--md-badge-large-shape`                | `8px` <!-- MD3 Spec: 8dp, half of 16dp height -->
`--md-badge-large-size`                 | `16px`
`--md-badge-shape`                      | `3px` <!-- MD3 Spec: 3dp, half of 6dp size -->
`--md-badge-size`                       | `6px`

*   [All tokens](https://github.com/material-components/material-web/tree/main/tokens/_md-comp-badge.scss) <!-- {.external} -->

### Badge theming example

<!-- no-catalog-start -->

![Image of a badge with a different theme applied](images/badge/theming-badge.png "Badge theming example.") <!-- TODO: Update with actual theming image -->

<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;align-items:center;"
      class="styled-example"
      title="Badge theming example."
      aria-label="Image of a badge with a different theme applied">
    <style>
      .styled-example .container {
        position: relative;
        display: inline-block;
        margin: 8px;
      }
      .styled-example md-icon {
        font-size: 32px;
      }
      .styled-example .themed-badge {
        --md-badge-color: var(--md-sys-color-primary);
        --md-badge-label-text-color: var(--md-sys-color-on-primary);
        --md-badge-large-color: var(--md-sys-color-tertiary);
        --md-badge-large-label-text-color: var(--md-sys-color-on-tertiary);
        --md-badge-large-shape: 4px; /* Less rounded */
        --md-badge-size: 8px; /* Larger dot */
      }
    </style>

    <div class="container">
      <md-icon>notifications</md-icon>
      <md-badge class="themed-badge" value="3"></md-badge>
    </div>
    <div class="container">
      <md-icon>mail</md-icon>
      <md-badge class="themed-badge"></md-badge>
    </div>
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
.themed-badge {
  --md-badge-color: var(--md-sys-color-primary);
  --md-badge-label-text-color: var(--md-sys-color-on-primary);
  --md-badge-large-color: var(--md-sys-color-tertiary);
  --md-badge-large-label-text-color: var(--md-sys-color-on-tertiary);
  --md-badge-large-shape: 4px; /* Less rounded */
  --md-badge-size: 8px; /* Larger dot */
}
</style>

<div style="position:relative; display:inline-block;">
  <md-icon>notifications</md-icon>
  <md-badge class="themed-badge" value="3"></md-badge>
</div>

<div style="position:relative; display:inline-block;">
  <md-icon>mail</md-icon>
  <md-badge class="themed-badge"></md-badge>
</div>
```

<!-- auto-generated API docs start -->

## API

### MdBadge <code>&lt;md-badge&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `value` | `string` | `''` | The text to display in the badge. If not set, a "dot" badge will be displayed. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->
