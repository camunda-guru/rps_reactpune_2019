import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NewRequest from "../newrequest/newrequest";
import {NotFound} from "./notfound";
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import MenuDummy from "./menudummy";

configure({ adapter: new Adapter() });


//jest.mock('firebase/app');

test('Valid  Path test', () => {

    /*const wrapper = shallow((
        <div>
            <div className="foo">bax</div>
            <div className="foo">bar</div>
            <div className="foo">baz</div>
        </div>
    ));

    const texts = wrapper.find('.foo').map(node => node.text());
    expect(texts).to.eql(['bax', 'bar', 'baz']);*/
    const wrapper1 = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <MenuDummy/>
        </MemoryRouter>
    );
    expect(wrapper1.find(NewRequest)).to.have.length(1);
   expect(wrapper1.find(NotFound)).to.have.length(0);
});


test('valid path should not redirect to 404', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <MenuDummy/>
        </MemoryRouter>
    );
    expect(wrapper.find(NewRequest)).to.have.length(1);
    expect(wrapper.find(NotFound)).to.have.length(0);
})
