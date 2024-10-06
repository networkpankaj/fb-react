import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">

        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook Logo" />

        </div>

        <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" />
        </div>

        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>Brother</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>


        </div>

    </div>
  )
}

export default Header