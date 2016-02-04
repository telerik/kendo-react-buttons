import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoButton from '../src/kendo-button';

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
    let buttonInstance = (
        <div>
          <KendoButton
            onClick={foo}
            icon={state.icon}
            primary={state.primary}>
                foo
          </KendoButton>
        </div>
    );

    ReactDOM.render( buttonInstance, document.getElementById('app') );
}

render();
