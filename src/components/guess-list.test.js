import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList/>', () => {
    it('should render without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    })

    it('should render guess history in order', () => {
        const guesses = [5, 10, 15, 20, 25];
        const wrapper = shallow(<GuessList guesses={guesses} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(items.at(index).text()).toEqual(guess.toString());
        })
    })
})