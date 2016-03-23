---
title: Overview
page_title: Overview | Kendo UI Button for React
description: "Use the Kendo UI Button component in a React project."
slug: overview_button_kendouiforreact
position: 1
---

# Button Overview

The Kendo UI Button is a React component that allows the user to achieve a UI functionality by clicking on it. The appearance of the Button can be configured so as to show textual content only, or to display an icon, an image, or a sprite icon, or yet a combination of textual and image content. Buttons can be enabled or disabled, and allow the attaching of click events to them.

The Button is a component that is part of the Buttons `npm` package of the Kendo UI suite for React.

**Figure 1. A Button template displaying text and a sprite icon as a background image**

//a template screen to be added - Vasko

## Configuration

### Enable and Disable

By default, the Kendo UI Button for React is enabled.

```html
//code goes here
```
```jsx
```

When disabled, the Button is displayed but does not operate.

```html
//code goes here
```
```jsx
```

### Add Icons

The Kendo UI Button for React enhances textual content by providing the option to add icons&mdash;image, sprite, or font ones. Taking web standards into consideration, it is better to use a background image as the icon does not represent structural content, but is simply a decoration.

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

FontAwesome or other font icons also can reside in a Kendo UI Button for React. They are implemented by setting the required third-party CSS classes through the `spriteCssClass` property.

```html
//code goes here
```
```jsx

```

### Toggle

The Button supports also visual styling that indicates if it is active. This functionality is set through the `togglable` option. By default, `togglable` is set to `false`.

```html
//code goes here
```
```jsx

```

### Handle Events

Through setting the `onClick` option, an event handler can be attached to the Button.

```html
//code goes here
```
```jsx

```

### Tab Index

By setting the `tabIndex` option, you are able to indicate the order in which buttons are selected through the `Tab` key.

```html
//code goes here
```
```jsx

```

For detailed information on the Kendo UI Button configuration for React, refer to the [Button client-side API documentation]({% slug api_button_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Button supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Enter`                             | Click the Button.   |
| `Space`                             | Click the Button.   |
| `Tab`                               | Focus the Button.   |

## Accessibility

The Button is WAI ARIA-accessible through the `Tab` key. The `aria-disabled` option defines the accessibility setting when an attribute is disabled.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Button for React.

```html-preview

```
```jsx

```

## Suggested Links

* [Client-Side API Reference for the Kendo UI Button Component]({% slug api_button_kendouiforreact %})
