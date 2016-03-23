---
title: Client-Side API
page_title: Client-Side API | Kendo UI ButtonGroup for React
description: "Configure and customize the Kendo UI ButtonGroup for React through its client-side API reference."
slug: api_buttongroup_kendouiforreact
position: 2
---

# ButtonGroup Client-Side API

Represents the Kendo UI ButtonGroup component for React.

## Enable and Disable

#### disabled `Boolean`

Disables the ButtonGroup. By default, the component is enabled, unless a `disabled` option is set.

## Add Icons

#### icon `String`

Defines a name of an existing icon in the Kendo UI theme sprite. The icon is applied as a background image of a `span` element inside the ButtonGroup.

#### imageUrl `String`

Defines a URL, which is used for an `img` element inside the Button. The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.

#### spriteCssClass `String`

Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;which are used for applying a background image to a `span` element inside the ButtonGroup.

## Toggle

#### togglable `Boolean`

Provides visual styling indicating if the ButtonGroup is clicked. By default, `togglable` is set to `true`.

## Handle Events

#### onClick `function`

Attaches an event handler to the ButtonGroup.

## Index Tabs

#### tabIndex `number`

Indicates the order in which buttons are selected through the `Tab` key.
