import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DogForm from "../DogForm";

Enzyme.configure({ adapter: new Adapter() });

describe("Test DogForm", () => {
  let wrapper;
  let nameField;
  let breedField;
  let ageField;
  const submitForm = (event = null) => {
    if (!event) {
      event = {
        preventDefault: () => {},
      };
    }
    wrapper.find("form").simulate("submit", event);
  };
  const updateField = (field, value) =>
    field.simulate("change", { target: { value } });
  const getInputField = (index) =>
    wrapper.find("input") && wrapper.find("input").at(index);
  beforeEach(() => {
    console.log = jest.fn();
    wrapper = shallow(<DogForm />);
    nameField = getInputField(0);
    breedField = getInputField(1);
    ageField = getInputField(2);
  });
  test("preventDefault is called", () => {
    const event = {
      preventDefault: () => {},
    };
    jest.spyOn(event, "preventDefault");
    submitForm(event);
    expect(event.preventDefault).toBeCalled();
  });
  test("has required fields", () => {
    expect(nameField.length).toEqual(1);
    expect(breedField.length).toEqual(1);
    expect(ageField.length).toEqual(1);
  });
  test("test one input", () => {
    updateField(nameField, "Rufus");
    updateField(breedField, "pit bull");
    updateField(ageField, "2");
    submitForm();
    expect(console.log).toBeCalledWith("Rufus", "pit bull", "2");
  });
  test("test fields cleared", () => {
    updateField(nameField, "Rufus");
    updateField(breedField, "pit bull");
    updateField(ageField, "2");
    submitForm();
    updateField(nameField, "Bingo");
    submitForm();
    expect(console.log).toBeCalledWith("Bingo", "", "");
  });
  test("test input value is set", () => {
    updateField(nameField, "Rufus");
    updateField(breedField, "pit bull");
    updateField(ageField, "2");
    expect(getInputField(0).props().value).toEqual("Rufus");
    expect(getInputField(1).props().value).toEqual("pit bull");
    expect(getInputField(2).props().value).toEqual("2");
  });
});
