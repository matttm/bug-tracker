import React from 'react';
import { shallow } from 'enzyme';
import BugForm from "./BugForm";

it('renders without crashing', () => {
    shallow(<BugForm />);
});