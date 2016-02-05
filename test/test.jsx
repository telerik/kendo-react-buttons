import * as React from 'react';
import { shallow } from 'enzyme';
import KendoButton from '../src/kendo-button';
import KendoButtonIcon from '../src/kendo-button-icon';
import KendoButtonGroup from '../src/kendo-button-group';

describe('KendoButton', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render an anchor tag', () => {
        result = shallow(<KendoButton />);
        expect(result.type()).toEqual('a');
    });

    it('should add k-primary if primary is true', () => {
        result = shallow(<KendoButton primary />);
        expect(result.hasClass('k-primary'));
    });

    it('should add k-button-icon if the button does not have text', () => {
        result = shallow(<KendoButton />);
        expect(result.hasClass('k-button-icon'));
    });

    it('should not add k-button-icon if the button has text', () => {
        result = shallow(<KendoButton>test</KendoButton>);
        expect(result.hasClass('k-button-icon'));
    });

    it('should not add k-state-disabled if disabled is true', () => {
        result = shallow(<KendoButton disabled >test</KendoButton>);
        expect(result.hasClass('k-state-disabled'));
    });

    it('should add aria-disabled if disabled is true', () => {
        result = shallow(<KendoButton disabled >test</KendoButton>);
        expect(result.prop('aria-disabled')).toBe(true);
    });

    it('should update k-state-active on click of a togglable button', () => {
        result = shallow(<KendoButton togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.hasClass('k-state-active'));
        result.simulate('click');
        expect(!result.hasClass('k-state-active'));
    });

    it('should update component state on click of a togglable button', () => {
        result = shallow(<KendoButton togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.state('active'));
        result.simulate('click');
        expect(!result.state('active'));
    });

    it('should execute click handler on click', () => {
        let handlers = {
            click: function() { }
        };
        spyOn(handlers, "click");
        result = shallow(<KendoButton onClick={handlers.click}>test</KendoButton>);
        result.simulate('click');
        expect(handlers.click.calls.any()).toBe(true);
    });

    it('should render span for the icon', () => {
        result = shallow(<KendoButton icon="refresh">test</KendoButton>);
        expect(result.find(KendoButtonIcon)).not.toBeUndefined();
    });
});

describe('KendoButtonGroup', () => {
    let result;
    beforeEach(() => {
        result = shallow(
            <KendoButtonGroup>
               <KendoButton>foo</KendoButton>
               <KendoButton>bar</KendoButton>
               <KendoButton>baz</KendoButton>
            </KendoButtonGroup>
        );
    });

    it('should render KendoButton elements in a div', () => {
        expect(result.type()).toEqual('div');
        expect(result.find(KendoButton).length).toEqual(3);
    });
    it('should add proper group classes to KendoButton elements', () => {
        let buttons = result.children();
        expect(buttons.at(0).hasClass('k-group-start'));
        expect(buttons.at(2).hasClass('k-group-end'));
    });

    it('should add disabled class if disabled is true', () => {
        result = shallow(
            <KendoButtonGroup disabled>
               <KendoButton>foo</KendoButton>
               <KendoButton>bar</KendoButton>
               <KendoButton>baz</KendoButton>
            </KendoButtonGroup>
        );

        expect(result.hasClass('k-state-disabled'));
    });

    it('should add aria-disabled attribute if disabled is true', () => {
        result = shallow(
            <KendoButtonGroup disabled>
               <KendoButton>foo</KendoButton>
               <KendoButton>bar</KendoButton>
               <KendoButton>baz</KendoButton>
            </KendoButtonGroup>
        );

        expect(result.prop('aria-disabled')).toBe(true);
    });
});
