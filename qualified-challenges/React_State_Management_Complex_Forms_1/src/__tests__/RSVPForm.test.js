import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RSVPForm from "../RSVPForm";

Enzyme.configure({ adapter: new Adapter() });

describe("Test RSVPForm", () => {
  let wrapper;
  let nameField;
  let newMemberField;
  let ageRangeField;
  let commentField;
  const submitForm = () =>
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
      }
    });
  const updateField = (field, value) => {
    const options = { target: { value, name: field.props().name } };
    field.simulate("change", options);
  };
  beforeEach(() => {
    wrapper = mount(<RSVPForm/>);
    const input = wrapper.find("input");
    nameField = input && input.at(0);
    newMemberField = input && input.at(1);
    ageRangeField = wrapper.find("select");
    const comment = wrapper.find("input");
    commentField = input && input.at(1);
    console.log = jest.fn();
  });
  test("Has correct fields", () => {
    expect(nameField.length).toEqual(1);
    expect(newMemberField.length).toEqual(1);
    expect(newMemberField.props().type).toEqual("checkbox");
    expect(ageRangeField.length).toEqual(1);
    expect(ageRangeField.find("option").length).toEqual(5);
    expect(commentField.length).toEqual(1);
  });
  test("Submission", () => {
    updateField(nameField, "John");
    const age = ageRangeField.find("option").last().props().value;
    updateField(ageRangeField, age);
    newMemberField.simulate("change", {
      target: {
        type: "checkbox",
        value: newMemberField.props().value,
        name: newMemberField.props().name,
        checked: true,
      },
    });
    submitForm();
    expect(console.log.mock.calls.length).toEqual(1);
    expect(console.log).toBeCalledWith("John", age, true, "");
  });
  test("Initial checkbox value is false", () => {
    updateField(nameField, "John");
    submitForm();
    expect(console.log.mock.calls[0][2]).toEqual(false);
  });
  test("Initial dropdown value is valid", () => {
    const ageRangeOptions = ageRangeField
      .find("option")
      .map((option) => option.props().value);
    updateField(nameField, "John");
    submitForm();
    expect(ageRangeOptions.includes(console.log.mock.calls[0][1])).toBeTruthy();
  });
  test("Fields cleared after submission", () => {
    updateField(nameField, "John");
    submitForm();
    submitForm();
    expect(console.log.mock.calls.length).toEqual(2);
    expect(console.log).toBeCalledWith("", "", false, "");
  });
});
