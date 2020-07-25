import React from 'react';
import { shallow } from 'enzyme';
import BugManager from "./BugManager";

it('renders without crashing', () => {
    shallow(<BugManager />);
});