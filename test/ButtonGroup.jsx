import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/Button';
import ButtonGroup from '../src/ButtonGroup';

describe('ButtonGroup', () => {
    let result;
    beforeEach(() => {
        result = shallow(
            <ButtonGroup>
               <Button>foo</Button>
               <Button>bar</Button>
               <Button>baz</Button>
            </ButtonGroup>
        );
    });

    it('should render Button elements in a div', () => {
        expect(result.type()).toEqual('div');
        expect(result.find(Button).length).toEqual(3);
    });
    it('should add proper group classes to Button elements', () => {
        let buttons = result.children();
        expect(buttons.first().hasClass('k-group-start')).toBe(true);
        expect(buttons.last().hasClass('k-group-end')).toBe(true);
    });

    it('should add disabled class if disabled is true', () => {
        result = shallow(
            <ButtonGroup disabled>
               <Button>foo</Button>
               <Button>bar</Button>
               <Button>baz</Button>
            </ButtonGroup>
        );

        expect(result.hasClass('k-state-disabled')).toBe(true);
    });

    it('should add aria-disabled attribute if disabled is true', () => {
        result = shallow(
            <ButtonGroup disabled>
               <Button>foo</Button>
               <Button>bar</Button>
               <Button>baz</Button>
            </ButtonGroup>
        );

        expect(result.prop('aria-disabled')).toBe(true);
    });
});
