import React, { useState } from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import IncrementButtons from "../IncrementButtons";

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);

describe("Test IncrementButtons setCount Calls", () => {
  let wrapper;
  const getText = () => {
    const h3 = wrapper.find("h3");
    return h3 && h3.map((element) => element.text());
  };
  
  beforeEach(() => {    
    wrapper = shallow(<IncrementButtons/>);
  });

  afterEach(() => {
     jest.clearAllMocks();
  });
    
  test("calls setCount() twice after clicking button Two", () => {    
    wrapper.find("button").last().simulate("click");   
    expect(setState).toHaveBeenCalledTimes(3);
    expect(setState).toHaveBeenCalledWith("Two");
  });


});
