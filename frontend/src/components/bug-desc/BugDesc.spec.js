import React from 'react';
import { shallow } from 'enzyme';
import BugDesc from "./BugDesc";

it('renders without crashing', () => {
    shallow(<BugDesc />);
});