const baseURL = process.env.TEST_BASE_URL;

beforeEach(() => {
  // Reset mock function's states before each test.
  jest.clearAllMocks();
});

// Show logs from the page inside labeled container
const onPageConsole = msg => {
  console.log(`<LOG::page console.${msg.type()}>${msg.text().replace(/\n/g, "<:LF:>")}`);
};

describe("Index Page", () => {
  beforeEach(async () => {
    if (!page.listeners('console').includes(onPageConsole)) {
      page.on('console', onPageConsole);
    }
    await page.goto(baseURL, { waitUntil: "load" });
  });

  // basic example of how to test for content on page
  it("should connect the index.js file to the HTML", async () => {
    await expect(page).toMatch('Hello');
  });
  
  it("should include a noscript element", async () => {
    await expect(page).toMatchElement('noscript');
  });
});