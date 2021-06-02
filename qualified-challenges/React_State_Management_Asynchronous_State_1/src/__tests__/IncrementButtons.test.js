import React, { useState } from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import IncrementButtons from "../IncrementButtons";

Enzyme.configure({ adapter: new Adapter() });

describe("Test IncrementButtons", () => {
  let wrapper;
  const getText = () => {
    const h3 = wrapper.find("h3");
    return h3 && h3.map((element) => element.text());
  };
  
  beforeEach(() => {    
    wrapper = shallow(<IncrementButtons/>);
  });
  
  test("initial text", () => {
    expect(getText()).toEqual([
      "Last Pressed: ",
      "Count: 0",
    ]);
  });
  test("text after clicking button One", () => {
    wrapper.find("button").first().simulate("click");
    expect(getText()).toEqual([
      "Last Pressed: One",
      "Count: 1",
    ]);
  });
  test("text after clicking button Two", () => {
    wrapper.find("button").last().simulate("click");
    expect(getText()).toEqual([
      "Last Pressed: Two",
      "Count: 2",
    ]);
  });
  test("text after clicking button One then Two", () => {
    wrapper.find("button").first().simulate("click");
    wrapper.find("button").last().simulate("click");
    expect(getText()).toEqual([
      "Last Pressed: Two",
      "Count: 3",
    ]);
  });
  test("text after clicking buttons Two, Two, One", () => {
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").last().simulate("click");
    wrapper.find("button").first().simulate("click");
    expect(getText()).toEqual([
      "Last Pressed: One",
      "Count: 5",
    ]);
  });
});
