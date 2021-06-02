import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import sinon from "sinon";

import CountButton from "../src/CountButton";

// test using Jest with default jsdom environment
describe("Test CountButton", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CountButton />);
  });
  test("initial text", () => {
    expect(wrapper.text()).toEqual("Click Count: 0");
  });
  test("text after one click", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.text()).toEqual("Click Count: 1");
  });
  test("text after two clicks", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.text()).toEqual("Click Count: 2");
  });
});