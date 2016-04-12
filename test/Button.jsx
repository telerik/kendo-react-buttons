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

    it('should not render icon element if no icon is specified', () => {
        result = shallow(<Button>test</Button>);
        expect(result.find('.k-icon').length).toEqual(0);
    });

    it('should render img tag based on imageUrl', () => {
        const url = "foo.png";
        result = shallow(<Button imageUrl={url}>test</Button>);

        let image = result.find('img');
        expect(image.length).toEqual(1);
        expect(image.prop('src')).toEqual(url);
    });

    it('should render icon classes based on icon', () => {
        result = shallow(<Button icon="arrow-s">test</Button>);

        let icon = result.find('.k-icon');
        expect(icon.length).toEqual(1);
        expect(icon.hasClass('k-i-arrow-s')).toBe(true);
    });

    it('should render iconClass directly', () => {
        result = shallow(<Button iconClass="fa fa-key">test</Button>);

        let icon = result.find('span').first();
        expect(icon.length).toEqual(1);
        expect(icon.hasClass('k-icon')).toBe(false);
        expect(icon.hasClass('fa')).toBe(true);
        expect(icon.hasClass('fa-key')).toBe(true);
    });

    it('should accept custom classes', () => {
        result = shallow(<Button className="foo" />);
        expect(result.hasClass('foo')).toBe(true);
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
