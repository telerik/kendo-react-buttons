import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/Button';

describe('Button', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render an anchor tag', () => {
        result = shallow(<Button />);
        expect(result.type()).toEqual('a');
    });

    it('should add k-primary if primary is true', () => {
        result = shallow(<Button primary />);
        expect(result.hasClass('k-primary')).toBe(true);
    });

    it('should add k-button-icon if the button does not have text', () => {
        result = shallow(<Button />);
        expect(result.hasClass('k-button-icon')).toBe(true);
    });

    it('should not add k-button-icon if the button has text', () => {
        result = shallow(<Button>test</Button>);
        expect(result.hasClass('k-button-icon')).toBe(false);
    });

    it('should not add k-state-disabled if disabled is true', () => {
        result = shallow(<Button disabled >test</Button>);
        expect(result.hasClass('k-state-disabled')).toBe(true);
    });

    it('should update k-state-active on click of a togglable button', () => {
        result = shallow(<Button togglable >test</Button>);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(true);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(false);
    });

    it('should **not** update k-state-active on click of a disabled togglable button', () => {
        result = shallow(<Button disabled togglable >test</Button>);
        result.simulate('click');
        expect(result.hasClass('k-state-active')).toBe(false);
    });

    it('should update component state on click of a togglable button', () => {
        result = shallow(<Button togglable >test</Button>);
        result.simulate('click');
        expect(result.state('active')).toBe(true);
        result.simulate('click');
        expect(result.state('active')).toBe(false);
    });

    it('should **not** update component state on click of a togglable button', () => {
        result = shallow(<Button disabled togglable >test</Button>);
        result.simulate('click');
        expect(result.state('active')).toBe(false);
    });

    it('should execute click handler on click', () => {
        let spy = jasmine.createSpy('spy');
        result = shallow(<Button onClick={spy}>test</Button>);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('should **not** execute click handler on click if component is disabled', () => {
        let spy = jasmine.createSpy('spy');
        result = shallow(<Button disabled onClick={spy}>test</Button>);
        result.simulate('click');
        expect(spy).not.toHaveBeenCalled();
    });

    it('should add tabIndex', () => {
        result = shallow(<Button>test</Button>);
        expect(result.prop('tabIndex')).toBe(0);
    });

    it('should preserve set tabIndex prop', () => {
        result = shallow(<Button tabIndex={4}>test</Button>);
        expect(result.prop('tabIndex')).toBe(4);
    });
});

describe('Button ARIA', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should add role="button"', function() {
        result = shallow(<Button>test</Button>);
        expect(result.prop('role')).toBe('button');
    });

    it('should add aria-disabled if disabled is true', () => {
        result = shallow(<Button disabled >test</Button>);
        expect(result.prop('aria-disabled')).toBe(true);
    });

});
