import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import '../styling/main.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='navbar'>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction 
                component={Link} 
                to="/home" 
                label="Nearby" 
                value="nearby" 
                icon={<HomeIcon />} 
                default
            />
            <BottomNavigationAction 
                component={Link} 
                to="/favorites" 
                label="Favorites" 
                value="favorites" 
                icon={<FavoriteIcon />} 
            />
            <BottomNavigationAction 
                component={Link} 
                to="/user" 
                label="Folder" 
                value="folder" 
                icon={<AccountCircleIcon />} 
            />
        </BottomNavigation>
    </div>
  );
}
