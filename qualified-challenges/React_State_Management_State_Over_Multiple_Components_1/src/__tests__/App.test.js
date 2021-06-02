import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("Test App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>);
  });
  const logIn = () => wrapper.find("button").first().simulate("click");
  const increaseFontSize = () => wrapper.find("button").at(1).simulate("click");
  const getContent = () => wrapper.find("Content").text();
  const getFontSize = () => wrapper.find("Content").props().fontSize;
  test("initial page", () => {
    logIn();
    expect(getContent()).toEqual("CONTENT");
    expect(getFontSize()).toEqual(12);
  });
  test("two buttons", () => {
    logIn();
    expect(wrapper.find("button").length).toEqual(2);
  });
  test("font increase once", () => {
    logIn();
    increaseFontSize();
    expect(getContent()).toEqual("CONTENT");
    expect(getFontSize()).toEqual(14);
  });
  test("font increase twice", () => {
    logIn();
    increaseFontSize();
    increaseFontSize();
    expect(getContent()).toEqual("CONTENT");
    expect(getFontSize()).toEqual(16);
  });
});
