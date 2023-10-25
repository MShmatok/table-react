import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { selectorFilteredTable } from 'store/table/selectors';
import { useDispatch, useSelector } from 'react-redux';
import TableItem from 'components/table/TableItem/TableItem';
import { openChangeModal } from 'store/table/slice';
import { deleteContactThunk } from 'store/table/thunk';
import TablePaginationActions from 'components/table/tablePagination/TablePaginationActions';
import HeaderTable from 'components/table/headerTable/headerTable';

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const dispatch = useDispatch();

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const filteredTable = useSelector(selectorFilteredTable);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredTable.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  const openModal = data => {
    dispatch(openChangeModal(data));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="custom pagination table">
        <HeaderTable setPage={setPage}></HeaderTable>
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
