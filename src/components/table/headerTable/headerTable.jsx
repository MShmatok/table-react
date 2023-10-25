import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableHead, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  selectFilterAddress,
  selectFilterBirthday_date,
  selectFilterEmail,
  selectFilterName,
  selectFilterPhone_number,
} from 'store/table/selectors';
import { setFilter } from 'store/table/slice';
import { getAllthunk } from 'store/table/thunk';

export default function HeaderTable({ setPage }) {
  const dispatch = useDispatch();
  const onChangeSearch = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'searchName':
        dispatch(setFilter({ name, value }));
        setPage(0);
        dispatch(getAllthunk());
        break;

      case 'searchEmail':
        dispatch(setFilter({ name, value }));
        setPage(0);
        dispatch(getAllthunk());
        break;

      case 'searchBirthday_date':
        dispatch(setFilter({ name, value }));
        setPage(0);
        dispatch(getAllthunk());
        break;

      case 'searchPhone_number':
        dispatch(setFilter({ name, value }));
        setPage(0);
        dispatch(getAllthunk());
        break;

      case 'searchAddress':
        dispatch(setFilter({ name, value }));
        setPage(0);
        dispatch(getAllthunk());
        break;

      default:
        break;
    }
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          Name{' '}
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchName"
                  type="text"
                  label="Find by name"
                  name="searchName"
                  autoComplete="text"
                  size="small"
                  value={useSelector(selectFilterName)}
                  onChange={onChangeSearch}
                />
              </Grid>
            </Grid>
          </Box>
        </TableCell>
        <TableCell align="left">
          Email
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchEmail"
                  type="text"
                  label="Find by email"
                  name="searchEmail"
                  autoComplete="text"
                  size="small"
                  value={useSelector(selectFilterEmail)}
                  onChange={onChangeSearch}
                />
              </Grid>
            </Grid>
          </Box>
        </TableCell>
        <TableCell align="left">
          Birthday date
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchBirthday_date"
                  type="date"
                  name="searchBirthday_date"
                  autoComplete="text"
                  size="small"
                  value={useSelector(selectFilterBirthday_date)}
                  onChange={onChangeSearch}
                />
              </Grid>
            </Grid>
          </Box>
        </TableCell>
        <TableCell align="left">
          Phone number
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchPhone_number"
                  type="text"
                  label="Find by Phone number"
                  name="searchPhone_number"
                  autoComplete="text"
                  size="small"
                  value={useSelector(selectFilterPhone_number)}
                  onChange={onChangeSearch}
                />
              </Grid>
            </Grid>
          </Box>
        </TableCell>
        <TableCell align="left">
          Address
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchAddress"
                  type="text"
                  label="Find by Address"
                  name="searchAddress"
                  autoComplete="text"
                  size="small"
                  value={useSelector(selectFilterAddress)}
                  onChange={onChangeSearch}
                />
              </Grid>
            </Grid>
          </Box>
        </TableCell>
        <TableCell align="left">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
}

HeaderTable.propTypes = {
  setPage: PropTypes.func.isRequired,
};
