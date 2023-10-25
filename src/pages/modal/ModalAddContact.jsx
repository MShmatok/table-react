import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAdd } from 'store/table/slice';
import { selectorDataForModalAdd } from 'store/table/selectors';
import InpurForm from 'components/inputForm/InputForm';
import { addNewContactThunk } from 'store/table/thunk';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalAddContact = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorDataForModalAdd);
  const handleClose = () => dispatch(closeModalAdd());

  const onSubmitModal = data => {
    dispatch(addNewContactThunk(data));
    handleClose();
  };

  return (
    <div>
      <Modal
        open={Boolean(data)}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InpurForm
            onSubmit={onSubmitModal}
            mainTitle={'Add contact'}
            btbTitle={'ADD NEW CONTACT!'}
            dataUser={data}
            add={true}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddContact;
