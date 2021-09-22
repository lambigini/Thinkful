import React from "react";

function Search ({ constellations, setConstellations }) {
  const filterConstellations = (event) => {
    const searchString = event.target.value;
    const visible = constellations.all.filter(({ name }) =>
      name.toLowerCase().includes(searchString)
    );

    setConstellations({
      ...constellations,
      visible,
    });
  };

  return (
    <form className="form container">
      <div className="form-group row">
        <input
          className="form-control col col-md-8"
          type="text"
          id="search"
          name="search"
          onChange={filterConstellations}
          placeholder="Search the stars..."
        />
        <label className="form-check-label sr-only" htmlFor="search">
          Search
        </label>
      </div>
    </form>
  );
};

export default Search;
