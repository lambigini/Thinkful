import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import sinon from "sinon";

import App from "../src/App";

describe("Test App.js", () => {
  test("App renders correctly", () => {
    const wrapperApp = shallow(<App />);
    expect(wrapperApp.text()).toEqual("Hello World!");
  });
});