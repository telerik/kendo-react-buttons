import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }
    onClick = () => {
        this.setState({ disabled: !this.state.disabled });
    }
    render() {
        return (
            <div>
                <Button onClick={this.onClick}>Button 1</Button>
                <Button disabled={this.state.disabled}>Button 2</Button>
            </div>
        );
    }
}

class ButtonGroupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }
    render() {
        return (
            <div className="k-toolbar">
                <ButtonGroup>
                    <Button togglable spriteCssClass="k-tool-icon k-bold" />
                    <Button togglable spriteCssClass="k-tool-icon k-italic" />
                    <Button togglable spriteCssClass="k-tool-icon k-underline" />
                </ButtonGroup>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <p>Button</p>
        <Button>Button</Button>
        <p>Disabled Button</p>
        <Button disabled>Button</Button>
        <p>Primary Button</p>
        <Button primary>Primary Button</Button>
        <p>Button with icon</p>
        <Button icon="refresh">Refresh</Button>
        <p>Button with icon (imageUrl)</p>
        <Button imageUrl="http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">Snowboarding</Button>
        <p>Button with icon (spriteCssClass) [FontAwesome icon]</p>
        <Button spriteCssClass="fa fa-key fa-fw">FontAwesome icon</Button>
        <p>Toggleable Button</p>
        <Button togglable>Togglable button</Button>
        <p>onClick event handler</p>
        <ButtonContainer />
        <hr />
        <p>Button Group</p>
        <div className="k-toolbar">
            <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        </div>
        <p>Disabled Button Group</p>
        <div className="k-toolbar">
            <ButtonGroup disabled>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        </div>
        <p>Togglable Button Group</p>
        <ButtonGroupContainer />
    </div>,
    document.getElementById('app')
);
