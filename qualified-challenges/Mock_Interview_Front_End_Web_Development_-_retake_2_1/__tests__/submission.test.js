import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../src/App";
import {mockUsers} from "../__mocks__/fileMock.js"
require("cross-fetch/polyfill");

describe("Users", () => {
  it("displays users", async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve(mockUsers),
      });
    });
    await act(async () => {
      render(<App />);
    });

    const firstUser = await screen.findByText(
      /Leanne Graham/i
    );
    expect(firstUser).toBeDefined();
  });
});
