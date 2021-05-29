import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import Clock from "../Clock";

Enzyme.configure({ adapter: new Adapter() });

// test using Jest with default jsdom environment
describe("Test App.jsx", () => {
  let realDate;
  let realDateNow;
  beforeEach(() => {
    realDate = Date;
    realDateNow = Date.now;
  });
  afterEach(() => {
    global.Date = realDate;
    global.Date.now = realDateNow;
  });
  const mockTime = (hours, minutes) => {
    const [year, month, day] = [2020, 1, 1];
    const fakeDate = new Date(year, month, day, hours, minutes);
    global.Date = class extends Date {
      constructor (date) {
        return date ? super(date) : fakeDate;
      }
    };
    Date.now = jest.fn(() => fakeDate.valueOf());
  };
  test("Clock morning", () => {
    mockTime(10, 0);
    const wrapper = shallow(<Clock/>);
    expect(wrapper.text()).toEqual("Good Morning!");
  });
  test("Clock afternoon", () => {
    mockTime(14, 0);
    const wrapper = shallow(<Clock/>);
    expect(wrapper.text()).toEqual("Good Afternoon!");
  });
  test("Clock evening", () => {
    mockTime(21, 0);
    const wrapper = shallow(<Clock/>);
    expect(wrapper.text()).toEqual("Good Evening!");
  });
  test("App logged out", () => {
    const wrapper = shallow(<App loggedIn={false}/>);
    expect(wrapper.type()).toEqual(null);
  });
  test("App logged in", () => {
    const wrapper = shallow(<App loggedIn={true}/>);
    expect(wrapper.type()).not.toEqual(null);
  });
  test("App render", () => {
    const wrapper = mount(<App loggedIn={true}/>);
    expect(wrapper.text()).toMatch(/Good \w+!/);
  });
});
