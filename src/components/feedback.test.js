import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback/>', () => {
    it('should render without crashing', () => {
        shallow(<Feedback />);
    })

    it('should render feedback', () => {
        let TEST_FEEDBACK = 'You are playing a game!';
        let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    })
})