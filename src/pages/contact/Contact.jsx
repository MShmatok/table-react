import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../components/commonStyled/SectionStyled.styled';
import { getAllthunk } from 'redux/table/thunk';
import { useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        {' '}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 4fr)' }}>
          <ContactForm />
          <ContactList />
        </Box>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Table;
