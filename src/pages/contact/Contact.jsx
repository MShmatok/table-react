import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../utils/commonStyled/SectionStyled.styled';
import { getAllthunk } from 'store/table/thunk';
import { useDispatch } from 'react-redux';
import CustomPaginationActionsTable from 'components/table/TableList/TableMain';
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
          <CustomPaginationActionsTable />
        </Box>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Table;
