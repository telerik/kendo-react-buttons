import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

import styles from '@telerik/kendo-theme-default/styles/icons/main'

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled: false };
    }
    onClick() {
        this.setState({ disabled: !this.state.disabled });
    }
    render() {
        return (
            <div>
                <Button onClick={this.onClick}>Disable next button</Button>
                {" "}
                <Button disabled={this.state.disabled}>Button</Button>
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

        <p>Button with icon (image via imageUrl)</p>
        <Button imageUrl="http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">Snowboarding</Button>

        <p>Button with icon (custom icon font - FontAwesome) icon</p>
        <Button iconClass="fa fa-key fa-fw">FontAwesome icon</Button>

        <p>Toggleable Button</p>
        <Button togglable>Togglable button</Button>

        <p>onClick event handler</p>
        <ButtonContainer />

        <hr />

        <p>Button Group</p>
        <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>

        <p>Disabled Button Group</p>
        <ButtonGroup disabled>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>

        <p>Togglable Button Group</p>
        <ButtonGroup>
            <Button togglable icon="bold" />
            <Button togglable icon="italic" />
            <Button togglable icon="underline" />
        </ButtonGroup>
    </div>,
    document.getElementById('app')
);
