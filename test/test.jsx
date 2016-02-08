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
        expect(result.hasClass('k-primary')).toBe(true);
    });

    it('should add k-button-icon if the button does not have text', () => {
        result = shallow(<KendoButton />);
        expect(result.hasClass('k-button-icon')).toBe(true);
    });

    it('should not add k-button-icon if the button has text', () => {
        result = shallow(<KendoButton>test</KendoButton>);
        expect(result.hasClass('k-button-icon')).toBe(false);
    });

    it('should not add k-state-disabled if disabled is true', () => {
        result = shallow(<KendoButton disabled >test</KendoButton>);
        expect(result.hasClass('k-state-disabled')).toBe(true);
    });

    it('should update k-state-active on click of a togglable button', () => {
        result = shallow(<KendoButton togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(true);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(false);
    });

    it('should **not** update k-state-active on click of a disabled togglable button', () => {
        result = shallow(<KendoButton disabled togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(false);
    });

    it('should update component state on click of a togglable button', () => {
        result = shallow(<KendoButton togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.state('active')).toBe(true);
        result.simulate('click');
        expect(result.state('active')).toBe(false);
    });

    it('should **not** update component state on click of a togglable button', () => {
        result = shallow(<KendoButton disabled togglable >test</KendoButton>);
        result.simulate('click');
        expect(result.state('active')).toBe(false);
    });

    it('should execute click handler on click', () => {
        let spy = jasmine.createSpy('spy');
        result = shallow(<KendoButton onClick={spy}>test</KendoButton>);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('should **not** execute click handler on click if component is disabled', () => {
        let spy = jasmine.createSpy('spy');
        result = shallow(<KendoButton disabled onClick={spy}>test</KendoButton>);
        result.simulate('click');
        expect(spy).not.toHaveBeenCalled();
    });

    it('should render span for the icon', () => {
        result = shallow(<KendoButton icon="refresh">test</KendoButton>);
        expect(result.find(KendoButtonIcon)).not.toBeUndefined();
    });

    it('should add tabIndex', () => {
        result = shallow(<KendoButton>test</KendoButton>);
        expect(result.prop('tabIndex')).toBe(0);
    });

    it('should preserve set tabIndex prop', () => {
        result = shallow(<KendoButton tabIndex={4}>test</KendoButton>);
        expect(result.prop('tabIndex')).toBe(4);
    });
});

describe('KendoButton ARIA', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should add role="button"', function() {
        result = shallow(<KendoButton>test</KendoButton>);
        expect(result.prop('role')).toBe('button');
    });

    it('should add aria-disabled if disabled is true', () => {
        result = shallow(<KendoButton disabled >test</KendoButton>);
        expect(result.prop('aria-disabled')).toBe(true);
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
        expect(buttons.first().hasClass('k-group-start')).toBe(true);
        expect(buttons.last().hasClass('k-group-end')).toBe(true);
    });

    it('should add disabled class if disabled is true', () => {
        result = shallow(
            <KendoButtonGroup disabled>
               <KendoButton>foo</KendoButton>
               <KendoButton>bar</KendoButton>
               <KendoButton>baz</KendoButton>
            </KendoButtonGroup>
        );

        expect(result.hasClass('k-state-disabled')).toBe(true);
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
