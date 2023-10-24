import React from 'react';
import { Button, WrapperUserMenu } from './UserMenu.styled';

import { IoExitOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/thunk';
import { selectorName } from 'redux/auth/selectors';

const UserMenu = () => {
  const userName = useSelector(selectorName);
  const dispatch = useDispatch();
  return (
    <WrapperUserMenu>
      <FaRegUser />
      <span>{`Welcome, ${userName}`}</span>
      <Button
        onClick={() => {
          dispatch(logOutThunk());
        }}
      >
        <IoExitOutline />
        <span>Log Out</span>
      </Button>
    </WrapperUserMenu>
  );
};

export default UserMenu;
