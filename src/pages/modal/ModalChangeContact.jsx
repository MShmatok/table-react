import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/table/slice';
import { selectorDataForModal } from 'store/table/selectors';
import InpurForm from 'components/InputForm/InputForm';
import { updateContactThunk } from 'store/table/thunk';

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

const ModalChangeContact = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorDataForModal);
  const handleClose = () => dispatch(closeModal());

  const onSubmitModal = data => {
    dispatch(updateContactThunk(data));
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
            mainTitle={'Change contact'}
            btbTitle={'Apply changes!'}
            dataUser={data}
            add={false}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalChangeContact;
