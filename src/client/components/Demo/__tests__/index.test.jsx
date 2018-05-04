import * as React from 'react';
import shallow from 'enzyme';
import Demo from '../';

describe('<Demo /> tests', () => {
    it('should render', () => {
        const wrapper = shallow(<Demo />);

        expect(wrapper.dive()).toMatchSnapshot();
    });
});
