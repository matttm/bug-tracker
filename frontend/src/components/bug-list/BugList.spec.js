import React from 'react';
import { shallow } from 'enzyme';
import BugList from "./BugList";

const bugList = [];

it('renders without crashing', () => {
    shallow(<BugList bugList={bugList}/>);
});