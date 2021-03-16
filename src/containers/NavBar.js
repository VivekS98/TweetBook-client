import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import '../styling/main.css';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function NavBar(props) {
  const history = useHistory();
  console.log(props.badge);

  return (
    <div className='navbar'>
        <BottomNavigation value={props.value} className="bottom-nav">
            <BottomNavigationAction 
                component={Link} 
                to="/home" 
                label="Home" 
                value="Home" 
                icon={<HomeIcon />} 
                default
            />
            <BottomNavigationAction 
                component={Link} 
                to="/notifications" 
                label="Notifications" 
                value="Notifications" 
                icon={<Badge badgeContent={props.badge} color="secondary">
                <NotificationsIcon />
              </Badge>} 
            />
            <BottomNavigationAction 
                component={Link} 
                to={`/user/${props.user}`} 
                label="User" 
                value="User" 
                icon={<AccountCircleIcon />} 
            />
        </BottomNavigation>
        <Fab 
          component="button" 
          className="add-icon"
          color="primary" 
          onClick={() => history.push("/newTweet")}
        >
          <AddIcon />
        </Fab>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.currentUser.user.id
});

export default connect(mapStateToProps, null)(NavBar);
