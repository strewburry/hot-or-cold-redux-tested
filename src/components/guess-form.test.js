import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm/>', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />);
    })

    it('should dispatch makeGuess action on submit', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch}/>);
        const input = wrapper.find('input[type="number"]');
        const guess = '25';
        input.instance().value = guess;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    })

    it('should reset form input on submit', () => {
        const wrapper = mount(<GuessForm dispatch={() => {}} />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = '25';
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    })
})