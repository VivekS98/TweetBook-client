import React, { useState } from "react";
import NavBar from "./NavBar";
import "../styling/main.css";
import { apiCall } from "../services/api";
import { TextField } from "@material-ui/core";

const Search = () => {
  const [searchStr, setSearchStr] = useState("");
  const [result, setResult] = useState([]);

  const handleOnChange = (e) => {
    setSearchStr(e.target.value);
    apiCall("get", `/api/users?search=${e.target.value}`, null)
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="search-screen">
      <div className="notify-card">
        <TextField
          id="outlined-basic"
          label="Search"
          style={{ backgroundColor: "white" }}
          variant="outlined"
          placeholder="Search User"
          value={searchStr}
          onChange={handleOnChange}
          fullWidth
        />
      </div>
      <NavBar value="Search" />
    </div>
  );
};

export default Search;
