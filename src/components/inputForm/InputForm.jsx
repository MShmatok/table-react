import React, { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectAllTable } from 'store/table/selectors';
import { toast } from 'react-toastify';

const defaultTheme = createTheme();

const InpurForm = ({
  add,
  onSubmit,
  mainTitle,
  btbTitle,
  dataUser = {
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: '',
  },
}) => {
  const items = useSelector(selectAllTable);
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

  const changeDate = birthday_date => {
    const [dd, mm, yy] = birthday_date.split('-');
    const year = yy < 30 ? 20 + yy : 19 + yy;
    const rightDate = year + '-' + mm + '-' + dd;
    return rightDate;
  };

  const [name, setName] = useState(dataUser.name);
  const [email, setEmail] = useState(dataUser.email);
  const [birthday_date, setBirthday_date] = useState(() => {
    return dataUser.birthday_date ? changeDate(dataUser.birthday_date) : '';
  });
  const [phone_number, setPhone_number] = useState(dataUser.phone_number);
  const [address, setAddress] = useState(dataUser.address);
  const [id] = useState(dataUser.id);

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'birthday_date':
        setBirthday_date(value);
        break;
      case 'phone_number':
        setPhone_number(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (add) {
      if (isDuplicate({ email })) {
        return;
      }
    }
    onSubmit({ id, name, email, birthday_date, phone_number, address });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FaRegCircleUser size={40} />
          <Typography component="h1" variant="h4">
            {mainTitle}
          </Typography>
          <Box component="form" onSubmit={onSubmitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  type="text"
                  label="Name"
                  name="name"
                  autoComplete="on"
                  value={name}
                  onChange={onChange}
                  inputProps={{
                    pattern: '^[A-Za-z ]{1,255}$',
                    title: 'From 1 to 255 Latin characters',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="on"
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  inputProps={{
                    pattern:
                      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
                    title: 'From 1 to 254 Latin characters',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="birthday_date"
                  label="Birthday date"
                  type="date"
                  id="birthday_date"
                  value={birthday_date}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone_number"
                  label="Telephone number"
                  type="tel"
                  id="phone_number"
                  value={phone_number}
                  onChange={onChange}
                  inputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                    title: 'only numbers',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  value={address}
                  onChange={onChange}
                  inputProps={{
                    pattern: '[A-Za-z0-9]{1,99999}',
                    title: 'From 1 to 99999 Latin characters',
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {btbTitle}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default InpurForm;

InpurForm.propTypes = {
  add: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  mainTitle: PropTypes.string.isRequired,
  btbTitle: PropTypes.string.isRequired,
  dataUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday_date: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    address: PropTypes.string,
  }).isRequired,
};
