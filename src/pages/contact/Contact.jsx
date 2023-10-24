import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../components/commonStyled/SectionStyled.styled';
import { getAllthunk } from 'redux/table/thunk';
import { useDispatch } from 'react-redux';
import CustomPaginationActionsTable from 'components/TableList/TableMain';
import AddNewContact from 'components/AddNewContact/AddNewContact';

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <AddNewContact />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 4fr)' }}>
          {/* <ContactForm /> */}
          <CustomPaginationActionsTable />
          {/* <ContactList /> */}
        </Box>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Table;
