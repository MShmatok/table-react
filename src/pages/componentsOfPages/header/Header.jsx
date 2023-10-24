import React from 'react';
import { HeaderStyled, Wrapper } from './HeaderStyled.styled';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import LoginMenu from '../loginMenu/LoginMenu';
import { useSelector } from 'react-redux';

import { selectorIsAuth } from 'redux/auth/selectors';

const Header = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <HeaderStyled>
      <Wrapper>
        <Navigation />
        {isAuth ? <UserMenu /> : <LoginMenu />}
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
