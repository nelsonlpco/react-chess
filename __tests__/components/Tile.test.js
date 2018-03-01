import React from 'react';
import {shallow} from 'enzyme';
import Tile from './../../src/components/Tile';

describe('Tile component tests', () => {
    it('rendering tile component without width and height', () => {
        var wrapper = shallow(<Tile color='#fff000' />);

        expect(wrapper.prop('style').width).toEqual(undefined);
        expect(wrapper.prop('style').height).toEqual(undefined);
        expect(wrapper).toMatchSnapshot();
    });

    it('rendering tile component with width and height', () => {
        var wrapper = shallow(<Tile width={400} height={400} color='#fff000' />);

        expect(wrapper.prop('style').width).toEqual('400px');
        expect(wrapper.prop('style').height).toEqual('400px');
        expect(wrapper).toMatchSnapshot();
    });
})
