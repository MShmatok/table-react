import React from 'react';

import { IoLogIn } from 'react-icons/io5';

import { RegistrationWrapper } from './LoginMenu.styled';
import { LinkStyled } from '../header/HeaderStyled.styled';

const LoginMenu = () => {
  return (
    <RegistrationWrapper>
      <LinkStyled to="/login">
        <IoLogIn />
        <span>Sing In</span>
      </LinkStyled>
    </RegistrationWrapper>
  );
};

export default LoginMenu;
