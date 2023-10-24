import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTable } from 'redux/table/selectors';
import { toast } from 'react-toastify';
import InpurForm from 'components/inputForm/InputForm';
import { addNewContactThunk } from 'redux/table/thunk';
import { Button } from '@mui/material';
import { openChangeModal, openModalAdd } from 'redux/table/slice';

const AddNewContact = () => {
  const items = useSelector(selectAllTable);
  const dispatch = useDispatch();

  const isDuplicate = data => {
    let isDuplicate = items.find(elem => {
      return (
        elem.email.toLowerCase().trim() === data.email.toLowerCase().trim()
      );
    });
    if (isDuplicate) {
      toast(`${data.email} is alredy in Table!`);
      return true;
    }
  };

  const onSubmit = newContact => {
    if (isDuplicate(newContact)) {
      return;
    }
    dispatch(addNewContactThunk(newContact));
  };

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
