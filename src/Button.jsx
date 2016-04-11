import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/button/main';

function ButtonIcon({ imageUrl, icon, spriteCssClass }) {
    const image = imageUrl ? (<img className={styles.image} src={imageUrl} />) : null;
    const iconClasses = icon ? classNames(styles.icon, styles['i-' + icon]) : spriteCssClass;
    return <span className={iconClasses}>{image}</span>;
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
    primary: PropTypes.bool,
    spriteCssClass: PropTypes.string,
    tabIndex: PropTypes.number,
    togglable: PropTypes.bool
};

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };

        this.onClick = this.handleClick.bind(this);
        this.onMouseDown = this.handleMouseDown.bind(this);
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
    handleMouseDown() {
        if (this.props.disabled) {
            return;
        }
        if (this.props.onMouseDown) {
            this.props.onMouseDown();
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
            onKeyPress: this.handleKeyPress,
            'aria-disabled': this.props.disabled
        };
        const iconProps = {
            icon: this.props.icon,
            imageUrl: this.props.imageUrl,
            spriteCssClass: this.props.spriteCssClass
        };
        return (
            <a {...buttonProps}>
                <ButtonIcon {...iconProps} />
                {this.props.children}
            </a>
        );
    }
}

Button.propTypes = propTypes;

export default Button;
