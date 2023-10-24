import React from 'react';
import { NavStyled } from './Navigation.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';
import { FcHome } from 'react-icons/fc';
import { CiViewTable } from 'react-icons/ci';
import { selectorIsAuth } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <NavStyled>
      <LinkStyled to="/">
        <FcHome />
        <span>Home</span>
      </LinkStyled>
      {isAuth && (
        <LinkStyled to="/table">
          <CiViewTable />
          <span>Table</span>
        </LinkStyled>
      )}
    </NavStyled>
  );
};

export default Navigation;
