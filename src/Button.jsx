import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/button/main';

function iconElement({ imageUrl, icon, iconClass }) {
    if (imageUrl) {
        return (<img className={styles.image} src={imageUrl} />);
    } else if (icon) {
        const iconClasses = classNames(styles.icon, styles['i-' + icon]);
        return (<span className={iconClasses}></span>);
    } else if (iconClass) {
        return (<span className={iconClass}></span>);
    }

    return null;
}

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.string
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    iconClass: PropTypes.string,
    tabIndex: PropTypes.number,
    togglable: PropTypes.bool
};

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.onClick = this.handleClick.bind(this);
        this.onMouseDown = this.handleMouseDown.bind(this);
        this.onMouseUp = this.handleMouseUp.bind(this);
        this.onKeyPress = this.handleKeyPress.bind(this);
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
    handleMouseDown(event) {
        if (this.props.disabled) {
            return;
        }
        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
    }
    handleMouseUp(event) {
        if (this.props.disabled) {
            return;
        }
        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
    }
    handleKeyPress(eventData) {
        if (eventData.charCode === 13 || eventData.charCode === 32) {
            this.handleClick();
        }
    }
    render() {
        const buttonClasses = classNames({
            [styles.button]: true,
            [styles['button-icon']]: this.props.children === undefined,
            [styles['state-disabled']]: this.props.disabled,
            [styles['primary']]: this.props.primary,
            [styles['state-active']]: this.state.active
        }, this.props.className);

        const buttonProps = {
            role: 'button',
            tabIndex: this.props.tabIndex || 0,
            className: buttonClasses,
            disabled: this.props.disabled,
            onClick: this.onClick,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onKeyPress: this.handleKeyPress,
            'aria-disabled': this.props.disabled
        };

        const icon = iconElement({
            icon: this.props.icon,
            imageUrl: this.props.imageUrl,
            iconClass: this.props.iconClass
        });

        return (
            <a {...buttonProps}>
                {icon}
                {this.props.children}
            </a>
        );
    }
}

Button.propTypes = propTypes;

export default Button;
