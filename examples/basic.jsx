import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from '@telerik/kendo-react-buttons';

let state = {
    disabled: true,
    primary: true,
    icon: "funnel-clear"
}

let foo = function() { console.log(1) };

let bar = function() {
    state.disabled = !state.disabled;
    render()
};

const render = () => {
    //Added k-toolbar to get the button-group stylings. Should be declared in the components SASS files
    let buttonInstance = (
        <div className='k-toolbar'>
        <ButtonGroup>
            <Button
                onClick={foo}
                icon={state.icon}
                togglable>
                    foo
            </Button>

            <Button togglable>Second button</Button>
            <Button togglable>Last button</Button>
        </ButtonGroup>
        </div>
    );

    ReactDOM.render( buttonInstance, document.getElementById('app') );
}

render();
