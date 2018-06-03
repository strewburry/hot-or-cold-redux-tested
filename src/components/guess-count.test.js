import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('should render without crashing', () => {
        shallow(<GuessCount />);
    })

    it('should render the correct guess count', () => {
        const count = 15; 
        const wrapper = shallow(<GuessCount guessCount={count} />);
        expect(wrapper.text()).toEqual(`You've made ${count} guesses!`);
    })
})