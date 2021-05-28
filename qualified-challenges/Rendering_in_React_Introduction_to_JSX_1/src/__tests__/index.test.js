import React from "react";
import ReactDOM from "react-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// test using Jest with default jsdom environment
describe("Test index.jsx", () => {
  test("renders and has required elements", () => {
    ReactDOM.render = jest.fn();
    const main = document.createElement("main");
    main.id = "root";
    document.body.appendChild(main);

    require("../index");
    expect(ReactDOM.render).toBeCalledTimes(1);
    const args = ReactDOM.render.mock.calls[0];
    expect(args.length).toEqual(2);
    const [element, container] = args;
    expect(container).toEqual(main);
    expect(element).toBeTruthy();

    const elementWrapper = shallow(element);
    const mainContainer = elementWrapper.find("main");
    expect(mainContainer.props().className).toEqual("main-container");

    const p = elementWrapper.find("p");
    expect(p.length).toEqual(1);
    expect(p.text()).toContain(
      "Purchased 4 shirts and 6 pants for a total of 10 items"
    );
    expect(p.props().className).toEqual("paragraph");

    const link = elementWrapper.find("a");
    expect(link.length).toEqual(1);
    expect(link.props().href).toEqual("https://www.thinkful.com/");
  });
});
