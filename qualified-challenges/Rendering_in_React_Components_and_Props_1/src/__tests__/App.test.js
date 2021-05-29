import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import Holiday from "../Holiday";

Enzyme.configure({ adapter: new Adapter() });

describe("Test App.jsx", () => {
  test("Holiday renders correctly", () => {
    const wrapperValentines = shallow(
      <Holiday name="Valentine's Day" day="14" month="February"/>
    );
    const wrapperChristmas = shallow(
      <Holiday name="Christmas" day="25" month="December"/>
    );
    expect(wrapperValentines.text()).toEqual("Valentine's Day: February 14");
    expect(wrapperChristmas.text()).toEqual("Christmas: December 25");
  });
  test("App displays the two Holidays", () => {
    const wrapper = mount(<App/>);
    const holiday = wrapper.find("Holiday");
    expect(holiday.length).toEqual(2);
    expect(holiday.first().text()).toEqual("Valentine's Day: February 14");
    expect(holiday.last().text()).toEqual("Christmas: December 25");
  });
});
