---
title: Overview
page_title: Overview | Kendo UI ButtonGroup for React
description: "Use the Kendo UI ButtonGroup component in a React project."
slug: overview_buttongroup_kendouiforreact
position: 1
---

# ButtonGroup Overview

The Kendo UI ButtonGroup for React is a group of more than one Kendo UI Buttons for React. The appearance of each Button comprising the ButtonGroup can be configured so as to show textual content only, or to display an icon, an image, or a sprite icon, or yet a combination of textual and image content. The Buttons within a ButtonGroup can be enabled or disabled, allow change events to be attached to them, and provide for visual styling.

The Kendo UI ButtonGroup for React is a component that is part of the Buttons `npm` package of the Kendo UI suite for React.

**Figure 1. A ButtonGroup template displaying text and a sprite icon as a background image**

//Vasko goes here

## Configuration

### Enable and Disable

By default, the Kendo UI ButtonGroup for React is enabled.

```html
//code goes here
```
```jsx
```

When disabled, the ButtonGroup is displayed but does not function.

```html
//code goes here
```
```jsx
```

### Add Icons

The Kendo UI ButtonGroup for React enhances textual content by providing the option to add icons&mdash;background, image, or font ones. Taking web standards into consideration, it is better to use a background image as the icon does not represent structural content, but is simply a decoration.

Background icons are applied via the `icon` or `spriteCssClass` property and are displayed as a background.

```html
//code goes here
```
```jsx

```

Image icons are applied through the `imageUrl` property.

```html
//code goes here
```
```jsx

```

FontAwesome or other font icons also can reside in a Kendo UI ButtonGroup for React. They are implemented by setting the required third-party CSS classes through the `spriteCssClass` property.

```html
//code goes here
```
```jsx

```

### Toggle

The ButtonGroup supports also visual styling that indicates if it is clicked. This functionality is set through the `togglable` option and, by default, `togglable` is set to `true`.

```html
//code goes here
```
```jsx

```

### Handle Events

Through setting the `onClick` option, an event handler can be attached to the ButtonGroup.

```html
//code goes here
```
```jsx

```

### Index Tabs

By setting the `tabIndex` option, you are able to indicate the order in which buttons are selected through the `Tab` key.

```html
//code goes here
```
```jsx

```

For detailed information on the Kendo UI ButtonGroup configuration for React, refer to the [Button client-side API documentation]({% slug api_buttongroup_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the ButtonGroup supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Enter`                             | Click the Button.   |
| `Tab`                               | Focus the Button.   |

## Accessibility

The ButtonGroup is WAI ARIA-accessible through the `Tab` key. The `aria-disabled` option defines the accessibility setting when an attribute is disabled.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI ButtonGroup for React.

```html-preview

```
```jsx

```

### Scenario 1

The example below demonstrates a Kendo UI ButtonGroup for React with ... (describe scenario).

```html-preview

```

## Suggested Links

* [Client-Side API Reference for the Kendo UI ButtonGroup Component]({% slug api_buttongroup_kendouiforreact %})
