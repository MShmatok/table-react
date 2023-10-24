import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/table/slice';

import React from 'react';

import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Filter = () => {
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const setFilters = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              type="text"
              label="Find Table by name"
              name="name"
              autoComplete="text"
              value={filter}
              onChange={setFilters}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Filter;
