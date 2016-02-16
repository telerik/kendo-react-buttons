import React, { PropTypes } from 'react';
import KendoButton from './kendo-button';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    disabled: PropTypes.bool
};

class KendoButtonGroup extends React.Component {
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
        let buttonClasses = classNames({
            'k-group-start': index === 0,
            'k-group-end': index === this.props.children.length - 1
        });
        let buttonProps = { ...child.props, className: buttonClasses };
        return(<KendoButton { ...buttonProps }/>);
    }
    render() {
        let buttons = this.mapButtons(this.props.children);
        let groupClasses = classNames({
            'k-button-group': true,
            'k-state-disabled': this.props.disabled
        });
        let groupProps = {
            className: groupClasses,
            disabled: this.props.disabled,
            'aria-disabled': this.props.disabled
        };
        return (
            <div {...groupProps}>{buttons}</div>
        );
    }
}

KendoButtonGroup.propTypes = propTypes;

export default KendoButtonGroup;
