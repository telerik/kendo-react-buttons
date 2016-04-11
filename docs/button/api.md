---
title: Client-Side API
page_title: Client-Side API | Kendo UI Button for React
description: "Configure and customize the Kendo UI Button for React through its client-side API reference."
slug: api_button_kendouiforreact
position: 2
---

# Button Client-Side API

Represents the Kendo UI Button component for React.

## Enable and Disable

#### disabled `Boolean`

Disables the Button. By default, the component is enabled, unless a `disabled` option is set.

## Set Primary Buttons

#### primary `Boolean`

Adds visual weight to the Button and makes it primary.

## Add Icons

#### icon `String`

Defines a name of an existing icon in the Kendo UI theme. The icon is rendered via a `span.k-icon` element inside the Button.

#### iconClass `String`

Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;which are applied to a `span` element inside the Button. Allows use of custom icons.

#### imageUrl `String`

Defines a URL, which is used for an `img` element inside the Button. The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.

## Toggle

#### togglable `Boolean`

Provides visual styling indicating if the Button is active. By default, `togglable` is set to `false`.

## Handle Events

#### onClick `function`

Attaches an event handler to the Button.

## Set Tab Indexes

#### tabIndex `number`

Indicates the order in which buttons are selected through the `Tab` key.
