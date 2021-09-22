import React, { useState } from "react";
import { fetchFrom } from "../utils/api";

function Home() {
  const [config, setConfig] = useState({
    url: "http://localhost:5000/cors-enabled",
  });
  const [result, setResult] = useState("Pending...");

  function changeHandler({ target: { name, value } }) {
    setConfig((previousConfig) => ({
      ...previousConfig,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    setResult("Pending...");
    const { url, ...fetchConfig } = config;

    fetchConfig.headers = new Headers();
    fetchConfig.headers.append("Accept", "application/json");

    if (["PUT", "POST"].includes(config.method)) {
      fetchConfig.headers.append("Content-Type", "application/json");
    } else {
      delete fetchConfig.body;
    }

    fetchFrom(url, fetchConfig).then(setResult).catch(setResult);
  }

  const bodyFormGroup = ["PUT", "POST"].includes(config.method) ? (
    <div className="form-group">
      <label htmlFor="body">Body:</label>
      <textarea
        className="form-control"
        id="body"
        name="body"
        rows="6"
        value={config.body}
        onChange={changeHandler}
      ></textarea>
    </div>
  ) : null;

  return (
    <div className="row">
      <div className="col-6">
        <h2>Request configuration:</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="url">Remote URL:</label>
            <input
              type="url"
              className="form-control"
              id="url"
              name="url"
              value={config.url}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="method">Method</label>
            <select
              className="form-control"
              id="method"
              name="method"
              value={config.method}
              onChange={changeHandler}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>
          {bodyFormGroup}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-6">
        <h2>Response:</h2>
        <pre className="card mt-4">{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Home;
