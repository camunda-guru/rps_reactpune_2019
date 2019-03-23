import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import MyComponent from "./propsdemo";
import {NotFound} from "./notfound";
import NewRequest from "../newrequest/newrequest";

configure({ adapter: new Adapter() });


test('valid props test', () => {
    const wrapper = shallow(<MyComponent includedProp="Success!" excludedProp="I'm not included" />);
    expect(wrapper.props().includedProp).to.equal('Success!');

})


