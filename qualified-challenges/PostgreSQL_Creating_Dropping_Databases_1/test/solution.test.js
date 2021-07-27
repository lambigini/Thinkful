const config = require("../src/solution");

const { Client } = require("pg");


describe("Database Connection", () => {
  it("should connect to a database", async () => {
    const client = new Client({
      ...config,
      port: 5432,
    });

    // the following will throw an error if the connection fails.
    await client.connect();
    await client.end();
  });
});
