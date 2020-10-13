import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import '../styling/main.css';
import { Link, useHistory } from 'react-router-dom';

function NavBar(props) {
  const history = useHistory();

  return (
    <div className='navbar'>
        <BottomNavigation value={props.value} className="bottom-nav">
            <BottomNavigationAction 
                component={Link} 
                to="/usr/home" 
                label="Home" 
                value="Home" 
                icon={<HomeIcon />} 
                default
            />
            <BottomNavigationAction 
                component={Link} 
                to="/usr/favorites" 
                label="Favorites" 
                value="favorites" 
                icon={<FavoriteIcon />} 
            />
            <BottomNavigationAction 
                component={Link} 
                to="/usr/user" 
                label="User" 
                value="User" 
                icon={<AccountCircleIcon />} 
            />
        </BottomNavigation>
        <Fab 
          component="button" 
          className="add-icon"
          color="primary" 
          onClick={() => history.push("/usr/newTweet")}
        >
          <AddIcon />
        </Fab>
    </div>
  );
}

export default NavBar;
