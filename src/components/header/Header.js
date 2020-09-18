import React from 'react';
import './header.css';
import { Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';


function Header() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option--active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
