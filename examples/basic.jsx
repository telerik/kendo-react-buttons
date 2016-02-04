import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoButton from '../src/kendo-button';
import KendoButtonGroup from '../src/kendo-react-buttongroup';


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
        <KendoButtonGroup>
          <KendoButton
            onClick={foo}
            icon={state.icon}
            togglable>
                foo
          </KendoButton>

        <KendoButton togglable>Second button</KendoButton>
        <KendoButton togglable>Last button</KendoButton>
        </KendoButtonGroup>
        </div>
    );

    ReactDOM.render( buttonInstance, document.getElementById('app') );
}

render();
