import React, { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { getProfileUser } from '../routes/helper';

export default function User() {
  const [user, setUser] = useState([]);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getProfileUser()
      .then((res) => {
        setUser(res);
        // console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <li className="pf-d-inline-block">
        <ul
          className="nav account-menu"
          id="dashboard__user-dropdown-account-menu"
          style={{ width: '100%' }}
        >
          <li className="dropdown">
            <a
              className="dropdown-toggle header__link pf-d-md-flex pf-flex-column pf-flex-md-row pf-align-items-center"
              data-toggle="dropdown"
            >
              <button
                onClick={handleClick}
                style={{ border: 'none', backgroundColor: 'white' }}
                type="button"
              >
                <i className="header__link__icon pf-i pf-i-account pf-i-24 pf-mr-auto pf-mr-sm-4" />
                <span className="header__link__text dashboard__account-menu-text">
                  {user.name !== undefined && user.name.split(' ')[0]}
                </span>
              </button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <a
                    style={{ textDecoration: 'none', color: '#000' }}
                    href="#"
                  >
                    Home page
                  </a>
                </MenuItem>
                <MenuItem onClick={() => history.push('/auth/logout')}>
                  Logout
                </MenuItem>
              </Menu>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}
