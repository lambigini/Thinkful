import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../src/App";
import {mockUsers, mockPosts} from "../__mocks__/fileMock.js"
require("cross-fetch/polyfill");


describe("User Todos", () => {
  afterEach(() => jest.resetAllMocks());

  test("displays todos of a user when the user's name is selected", async () => {
    const mockFetch = jest
      .spyOn(global, "fetch")
      .mockImplementationOnce((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith("users")) {
              return Promise.resolve(mockUsers);
            }

            if (url.endsWith("todos")) {
              return Promise.resolve(mockTodos);
            }

            return Promise.resolve([]);
          },
        });
      });
    await act(async () => {
      render(<App />);
    });
    const firstUser = await screen.findByText(
      /Leanne Graham/i
    );

    await act(async () => {
      firstUser.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    mockFetch.mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockTodos),
      });
    });
    const thirdTodo = await screen.findByText(
      /fugiat veniam minus/i
    );
    expect(thirdTodo).toBeDefined();
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
  });
});
