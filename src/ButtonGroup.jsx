import React, { PropTypes } from 'react';
import Button from './Button';
import classNames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/button/main';

const propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    disabled: PropTypes.bool
};

class ButtonGroup extends React.Component {
    constructor() {
        super();
    }
    mapButtons(props) {
        return React.Children.map(props, (child, index) => {
            if (React.isValidElement(child)) {
                return this.renderButton(child, index);
            }
            return child;
        });
    }
    renderButton(child, index) {
        const buttonClasses = classNames({
            [styles['group-start']]: index === 0,
            [styles['group-end']]: index === this.props.children.length - 1
        });
        const buttonProps = { ...child.props, className: buttonClasses };
        return(<Button { ...buttonProps }/>);
    }
    render() {
        const buttons = this.mapButtons(this.props.children);
        const groupClasses = classNames({
            [styles['button-group']]: true,
            [styles['state-disabled']]: this.props.disabled
        });
        const groupProps = {
            className: groupClasses,
            disabled: this.props.disabled,
            'aria-disabled': this.props.disabled
        };
        return (
            <div {...groupProps} className={groupClasses}>{buttons}</div>
        );
    }
}

ButtonGroup.propTypes = propTypes;

export default ButtonGroup;
