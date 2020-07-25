import React from 'react';
import { shallow } from 'enzyme';
import BugTracker from "./BugTracker";

it('renders without crashing', () => {
    shallow(<BugTracker />);
});