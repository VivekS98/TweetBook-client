import React, { useState } from "react";
import NavBar from "./NavBar";
import "../styling/main.css";
import { apiCall } from "../services/api";
import { Card, CardContent, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const [searchStr, setSearchStr] = useState("");
  const [result, setResult] = useState([]);
  const history = useHistory();

  const handleOnChange = (e) => {
    setSearchStr(e.target.value);
    if (e.target.value?.length) {
      apiCall("get", `/api/users?search=${e.target.value}`, null)
        .then((data) => setResult(data))
        .catch((err) => console.log(err));
    } else {
      setResult([]);
    }
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
      <div>
        {result.map((user) => (
          <Card
            className="message-card cursor-pointer"
            key={user._id.$oid}
            onClick={() => history.push(`/user/${user._id.$oid}`)}
          >
            <CardContent className="search-suggestion">
              <img
                className="search-suggestion-img"
                src={
                  user?.profileImgUrl ||
                  "https://www.knack.com/images/about/default-profile.png"
                }
                alt="profile-img"
              />
              <Typography
                style={{ marginLeft: "5px" }}
                variant="h6"
                gutterBottom
              >
                {user.username}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <NavBar value="Search" />
    </div>
  );
};

export default Search;
