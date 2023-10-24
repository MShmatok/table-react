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

const defaultTheme = createTheme();

const InpurForm = ({
  onSubmit,
  mainTitle,
  btbTitle,
  dataUser = { name: '', number: '', id: '' },
}) => {
  const [name, setName] = useState(dataUser.name);
  const [number, setNumber] = useState(dataUser.number);
  const [id] = useState(dataUser.id);

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(name, number, id);
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
                  autoComplete="text"
                  value={name}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="number"
                  label="Telephone number"
                  type="tel"
                  id="tel"
                  value={number}
                  onChange={onChange}
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
  onSubmit: PropTypes.func.isRequired,
  mainTitle: PropTypes.string.isRequired,
  btbTitle: PropTypes.string.isRequired,
};
