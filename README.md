[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-buttons.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-buttons)

# Kendo UI Buttons for React

* [Overview](https://github.com/telerik/kendo-react-buttons#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-buttons#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-buttons#installation)
* [Browser Support](https://github.com/telerik/kendo-react-buttons#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-buttons#glossary)
  * [Component](https://github.com/telerik/kendo-react-buttons#component)
  * [Package](https://github.com/telerik/kendo-react-buttons#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Buttons package for React.

Currently, the package includes the following components:

* Button
* ButtonGroup

## Basic Usage

### Kendo UI Button 

The Button allows users to achieve a UI functionality by clicking on it.

```html-preview
    <div id="app"></div>
```
```jsx
    class ButtonContainer extends React.Component {
        onClick = () => {
            //handle event
        }
        render() {
            return (
                <div>
                    <KendoReactButtons.Button onClick={this.onClick}>My Button</KendoReactButtons.Button>
                </div>
            );
        }
    }

    ReactDOM.render(
        <ButtonContainer />,
        document.getElementById('app')
    );    
```

For more examples and available configuration options, refer to the [Button documentation](https://github.com/telerik/kendo-react-buttons/blob/master/docs/button/index.md).

### Kendo UI ButtonGroup 

The ButtonGroup is a group of more than one Buttons.

```html-preview
    <div id="app"></div>
```
```jsx
    ReactDOM.render(
        <KendoReactButtons.ButtonGroup>
            <KendoReactButtons.Button>Button 1</KendoReactButtons.Button>
            <KendoReactButtons.Button>Button 2</KendoReactButtons.Button>
            <KendoReactButtons.Button>Button 3</KendoReactButtons.Button>
        </KendoReactButtons.ButtonGroup>,
        document.getElementById('app')
    );    
```

For more examples and available configuration options, refer to the [ButtonGroup documentation](https://github.com/telerik/kendo-react-buttons/blob/master/docs/buttongroup/index.md).

## Installation

The Buttons components are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-buttons;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import * as KendoReactButtons from 'kendo-react-buttons';
```
```jsx
// CommonJS format
var Button = require('kendo-react-buttons').Button;
var ButtonGroup = require('kendo-react-buttons').ButtonGroup;
```

## Browser Support

The Buttons components work in all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms that Kendo UI suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Button and ButtonGroup components for React are part of the Buttons Package.
