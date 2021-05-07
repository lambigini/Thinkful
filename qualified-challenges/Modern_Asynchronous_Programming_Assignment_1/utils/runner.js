const axios = require("axios");
const { bulkImport } = require("../src/main.solution");

const BASE_URL = `http://localhost:5000`;

async function runner() {
  // Make a request to get all of the constellations.
  const url = `${BASE_URL}/constellations`;

  /*
    Check to make sure the server is running.
  */
  let constellations;
  try {
    const result = await axios(url);
    constellations = result.data;
  } catch (err) {
    throw `Connection failed! Make sure your Constellations Server is running.`;
  }

  /*
    At least two constellations are need to use the runner.
  */
  if (constellations.length < 2) {
    throw `At least two constellations are needed. ${constellations.length} present.`;
  }

  /*
    Gain access to the first two constellations.
  */
  const [first, second] = constellations;

  /*
    Check for a rejection if bulkImport() is used without an array.
  */
  console.log("Should reject if anything but an array is passed in...");
  let notArraySuccess = false;
  try {
    await bulkImport({});
    notArraySuccess = true;
  } catch (err) {
    console.log(
      "bulkImport() failed when an object was passed in, as it should have!"
    );
  } finally {
    if (notArraySuccess) throw "bulkImport() should have failed but didn't!";
    console.log("");
  }

  /*
    Check for a rejection if bulkImport() is used with any constellations that are missing a property.
  */
  console.log(
    "Should reject if any properties are missing from the constellations..."
  );
  let missingProperties = false;
  try {
    await bulkImport([{ id: first.id, starsWithPlanets: 7 }]);
    missingProperties = true;
  } catch (err) {
    console.log(
      "bulkImport() failed when properties are missing, as it should have!"
    );
  } finally {
    if (missingProperties) throw "bulkImport() should have failed but didn't!";
    console.log("");
  }

  /*
    Check for a rejection if something else is wrong with the request. For example, the IDs are incorrect.
  */
  console.log(
    "Should reject if any properties are missing from the constellations..."
  );
  let wrongId = false;
  try {
    const [response] = await bulkImport([{ ...first, id: "wrong-id" }]);
    if (response.status === "fulfilled") wrongId = true;
    if (response.status === "rejected") {
      console.log(
        "bulkImport() failed when the request failed, as it should have!"
      );
    }
  } catch (err) {
    console.log(
      "bulkImport() failed when the request failed, as it should have!"
    );
  } finally {
    if (wrongId) throw "bulkImport() should have failed but didn't!";
    console.log("");
  }

  /*
    Update multiple constellations with bulkImport().
  */
  console.log("Updating multiple constellations with bulkImport()...");
  try {
    const result = await bulkImport([first, second]);
    if (result.every((record) => record.status === "fulfilled")) {
      console.log("Operation succeeded!");
    } else {
      throw "Promises came back as unfulfilled.";
    }
  } catch (error) {
    console.log("bulkImport() failed.");
    console.error(error);
  } finally {
    console.log("");
  }
}

runner();
