const { expect } = require("chai");
const { listAllItems } = require("../src/solution");

describe("Solution Functions", () => {
  let products = {};
  beforeEach(() => {
    products = [
      {
        name: "Hat",
        priceInCents: 8800,
        availableSizes: ["S", "M", "L"],
      },
      {
        name: "Shirt",
        priceInCents: 9800,
        availableSizes: [0, 10, 12, 2],
      },
      {
        name: "Square-Neck Jumpsuit",
        priceInCents: 8800,
        availableSizes: [6, 10, 14, 2, 12],
      },
      {
        name: "Subtle Sneakers",
        priceInCents: 8000,
        availableSize: [40, 42, 44, 46],
      },
    ];
  });

  describe("#listAllItems", () => {
    describe("More than 3 products", () => {
      it("should list all the item names with an introductory statement", () => {
        const actual = listAllItems(products);
        const expected =
          "There are 4 items for sale: Hat, Shirt, Square-Neck Jumpsuit, Subtle Sneakers.";
        expect(actual).to.eql(expected);
      });
    });

    describe("More than 2 products", () => {
      it("should list all the item names with an introductory statement", () => {
        const actual = listAllItems(products.slice(0, 3));
        const expected =
          "There are 3 items for sale: Hat, Shirt, Square-Neck Jumpsuit.";
        expect(actual).to.eql(expected);
      });
    });

    describe("Exactly 2 products", () => {
      it("should list all the item names with an introductory statement", () => {
        const actual = listAllItems(products.slice(0, 2));
        const expected = "There are 2 items for sale: Hat and Shirt.";
        expect(actual).to.eql(expected);
      });
    });

    describe("Exactly 1 product", () => {
      it("should list all the item names with an introductory statement", () => {
        const actual = listAllItems(products.slice(2, 3));
        const expected = "There is 1 item for sale: Square-Neck Jumpsuit.";
        expect(actual).to.eql(expected);
      });
    });

    describe("Exactly 0 products", () => {
      it("should list all the item names with an introductory statement", () => {
        const actual = listAllItems([]);
        const expected = "There are no items for sale.";
        expect(actual).to.eql(expected);
      });
    });
  });
});

describe("Solution Implementation", () => {
  describe("#listAllItems", () => {
    it("should use template literals", () => {
      expect(listAllItems.toString().includes("${")).to.be.true;
    });

    it("should use the .join() method", () => {
      expect(listAllItems.toString().includes(".join(")).to.be.true;
    });
  });
});
