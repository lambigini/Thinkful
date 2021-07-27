import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
require("cross-fetch/polyfill");

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body:
      "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body:
      "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
];

describe("User Comments", () => {
  afterEach(() => jest.resetAllMocks());

  test("displays comments for first post when the first post is clicked", async () => {
    const mockFetch = jest
      .spyOn(global, "fetch")
      .mockImplementationOnce((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith("userId=1")) {
              return Promise.resolve(posts);
            }

            if (url.endsWith("comments")) {
              return Promise.resolve(comments);
            }

            return Promise.resolve([]);
          },
        });
      });
    await act(async () => {
      render(<App />);
    });
    const firstPost = await screen.findByText(
      /suscipit suscipit recusandae consequuntur expedita/i
    );

    await act(async () => {
      firstPost.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    mockFetch.mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(comments),
      });
    });
    const firstPostComments = await screen.findByText(
      /laudantium enim quasi est quidem magnam/i
    );
    expect(firstPostComments).toBeDefined();
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
  });
});
