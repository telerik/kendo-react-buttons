import * as React from 'react';

export default class KendoButtonIcon extends React.Component {
    constructor() {
        super();
    }
    render() {
        let iconClasses = '';
        let image = this.props.imageUrl ? (
            <img className="k-image" src={this.props.imageUrl}/>
        ) : null;
        if (this.props.icon) {
            iconClasses += 'k-icon k-sprite k-i-' + this.props.icon;
        }
        if (this.props.spriteCssClass) {
            iconClasses += this.props.spriteCssClass;
        }
        return (
            <span className={iconClasses}>{image}</span>
        );
    }
}

KendoButtonIcon.propTypes = {
    icon: React.PropTypes.string,
    imageUrl: React.PropTypes.string,
    spriteCssClass: React.PropTypes.string
};
