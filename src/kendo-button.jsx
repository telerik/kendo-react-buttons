import * as React from 'react';
import classNames from 'classnames';
import KendoButtonIcon from './kendo-button-icon';

export default class KendoButton extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }
    handleClick() {
        if (this.props.disabled) {
            return;
        }
        if (this.props.togglable) {
            this.setState({ active: !this.state.active });
        }
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    handleKeyPress(eventData) {
        if (eventData.charCode === 13 || eventData.charCode === 32) {
            this.handleClick();
        }
    }
    render() {
        let buttonClasses = classNames({
            'k-button': true,
            'k-button-icon': this.props.children === undefined,
            'k-state-disabled': this.props.disabled,
            'k-primary': this.props.primary,
            'k-state-active': this.state.active
        }, this.props.className);
        let buttonProps = {
            role: 'button',
            className: buttonClasses,
            disabled: this.props.disabled,
            onClick: this.handleClick.bind(this),
            onKeyPress: this.handleKeyPress.bind(this),
            'aria-disabled': this.props.disabled
        };
        let iconProps = {
            icon: this.props.icon,
            imageUrl: this.props.imageUrl,
            spriteCssClass: this.props.spriteCssClass
        };
        return (
            <a href="#" {...buttonProps}>
            <KendoButtonIcon {...iconProps} />
            {this.props.children}
            </a>
        );
    }
}

KendoButton.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.string
    ]),
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    icon: React.PropTypes.string,
    imageUrl: React.PropTypes.string,
    onClick: React.PropTypes.func,
    primary: React.PropTypes.bool,
    spriteCssClass: React.PropTypes.string,
    togglable: React.PropTypes.bool
};
