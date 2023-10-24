import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import { openModalAdd } from 'redux/table/slice';

const AddNewContact = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(
      openModalAdd({
        name: '',
        email: '',
        birthday_date: '',
        phone_number: '',
        address: '',
      })
    );
  };
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={openModal}
    >
      Add new contact
    </Button>
  );
};

export default AddNewContact;
