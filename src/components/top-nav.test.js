import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions';


describe('<TopNav/>', () => {
    it('should render without crashing', () => {
        shallow(<TopNav />);
    })

    it('should dispatch restartGame action when user clicks new game', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    })

    it('should dispatch generateAuralUpdate when user clicks hear state of game', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    })
})