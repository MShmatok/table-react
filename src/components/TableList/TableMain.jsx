import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
  selectFilterAddress,
  selectFilterBirthday_date,
  selectFilterEmail,
  selectFilterName,
  selectFilterPhone_number,
  selectorFilteredTable,
} from 'redux/table/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { TableHead, TextField } from '@mui/material';

import TableItem from 'components/TableItem/TableItem';
import { openChangeModal, setFilter } from 'redux/table/slice';
import { deleteContactThunk, getAllthunk } from 'redux/table/thunk';
import Grid from '@mui/material/Grid';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
  const filteredTable = useSelector(selectorFilteredTable);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredTable.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  const openModal = data => {
    dispatch(openChangeModal(data));
  };

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="custom pagination table">
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
        <TableBody>
          {(rowsPerPage > 0
            ? filteredTable.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : filteredTable
          ).map(row => (
            <TableItem
              key={row.id}
              row={row}
              onDelete={() => handleDelete(row.id)}
              openChangeModal={() => openModal(row)}
            />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={filteredTable.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
