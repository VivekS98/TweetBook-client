import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Fab from "@material-ui/core/Fab";
import "../styling/main.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { AccountCircle, Add, Home, Search } from "@material-ui/icons";

function NavBar(props) {
  const history = useHistory();

  return (
    <div className="navbar">
      <BottomNavigation value={props.value} className="bottom-nav">
        <BottomNavigationAction
          component={Link}
          to="/home"
          label="Home"
          value="Home"
          icon={<Home />}
          default
        />
        <BottomNavigationAction
          component={Link}
          to="/search"
          label="Search"
          value="Search"
          icon={<Search />}
        />
        <BottomNavigationAction
          component={Link}
          to={`/user/${props.user}`}
          label="User"
          value="User"
          icon={<AccountCircle />}
        />
      </BottomNavigation>
      <Fab
        component="button"
        className="add-icon"
        color="primary"
        onClick={() => history.push("/newTweet")}
      >
        <Add />
      </Fab>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.currentUser.user._id.$oid,
});

export default connect(mapStateToProps, null)(NavBar);
