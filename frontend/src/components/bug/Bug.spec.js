import React from 'react';
import { shallow } from 'enzyme';
import Bug from "./Bug";

it('renders without crashing', () => {
    shallow(<Bug />);
});