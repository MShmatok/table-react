import React from 'react';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../components/commonStyled/SectionStyled.styled';
import { LinkStyled } from '../componentsOfPages/header/HeaderStyled.styled';

const Home = () => {
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <h1>
          Welcome to the main page of the Phonebook app! Here, you'll find a
          convenient and straightforward interface for storing and organizing
          your Table in a list. Use our app to quickly add, edit, and delete
          Table, as well as search for them by name. Phonebook makes managing
          your Table incredibly simple and user-friendly.
        </h1>
        <LinkStyled to="/login">
          <span>Let's go!</span>
        </LinkStyled>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Home;
