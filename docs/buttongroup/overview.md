---
title: Overview
page_title: Overview | Kendo UI ButtonGroup for React
description: "Use the Kendo UI ButtonGroup component in a React project."
slug: overview_buttongroup_kendouiforreact
position: 1
---

# ButtonGroup Overview

The Kendo UI ButtonGroup for React is a container for two or more Kendo UI Button components. Each Button can be separately configured depending on your project requirements and according to the [Button client-side API](https://github.com/telerik/kendo-react-buttons/blob/master/docs/button/api.md).  

The ButtonGroup is a component that is part of the Buttons `npm` package of the Kendo UI suite for React.

**Figure 1: A ButtonGroup template displaying text and a sprite icon as a background image**

//a template screen to be added - Vasko

## Configuration

### Enable and Disable

By default, the Kendo UI ButtonGroup for React is enabled.

```html
    <div id="app"></div>    
```
```jsx
    ReactDOM.render(
        <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>,
        document.getElementById('app')
    );
```

When disabled, the ButtonGroup is displayed but does not function.

```html
    <div id="app"></div>    
```
```jsx
    ReactDOM.render(
        <ButtonGroup disabled>
            <Button>Disabled Button 1</Button>
            <Button>Disabled Button 2</Button>
            <Button>Disabled Button 3</Button>
        </ButtonGroup>,
        document.getElementById('app')
    );
```

For detailed information on the Kendo UI ButtonGroup configuration for React, refer to the [ButtonGroup client-side API documentation]({% slug api_buttongroup_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the ButtonGroup supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Tab`                               | Focus a specific Button from the ButtonGroup. |

## Accessibility

The ButtonGroup is WAI ARIA-accessible through the `Tab` key. The `aria-disabled` option defines the accessibility setting when an attribute is disabled.

## Demos

### Default Setup

The example below demonstrates how to configure a togglable Kendo UI ButtonGroup for React.

```html-preview
    <div id="app"></div>    
```
```jsx
    ReactDOM.render(
        <ButtonGroup>
            <Button togglable spriteCssClass="k-tool-icon k-bold" />
            <Button togglable spriteCssClass="k-tool-icon k-italic" />
            <Button togglable spriteCssClass="k-tool-icon k-underline" />
        </ButtonGroup>,
        document.getElementById('app')
    );
```

## Suggested Links

* [Client-Side API Reference for the Kendo UI ButtonGroup Component](https://github.com/telerik/kendo-react-buttons/blob/master/docs/button/api.md)
