import * as React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import shallow from 'enzyme';
import Demo from '../';

describe('<Demo /> tests', () => {
    const mockStore = configureStore([thunk]);

    it('should render', () => {
        const wrapper = shallow(<Demo store={mockStore({})} />);

        expect(wrapper.dive()).toMatchSnapshot();
    });
});
