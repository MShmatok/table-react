import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DriveFileRenameOutline } from '@mui/icons-material';

export default function TableItem({ row, onDelete, openChangeModal }) {
  return (
    <TableRow key={row.id}>
      <TableCell
        component="th"
        scope="row"
        style={{ minWidth: 50, maxWidth: 166, overflow: 'hidden' }}
        align="left"
      >
        {row.name}
      </TableCell>
      <TableCell
        style={{ minWidth: 50, maxWidth: 150, overflow: 'hidden' }}
        align="left"
      >
        {row.email}
      </TableCell>
      <TableCell
        style={{ minWidth: 50, maxWidth: 166, overflow: 'hidden' }}
        align="left"
      >
        {row.birthday_date}
      </TableCell>
      <TableCell
        style={{ minWidth: 50, maxWidth: 166, overflow: 'hidden' }}
        align="left"
      >
        {row.phone_number}
      </TableCell>
      <TableCell
        style={{ minWidth: 50, maxWidth: 166, overflow: 'hidden' }}
        align="left"
      >
        {row.address}
      </TableCell>
      <TableCell
        style={{ minWidth: 136, maxWidth: 166, overflow: 'hidden' }}
        align="left"
      >
        <IconButton
          onClick={onDelete}
          aria-label="delete"
          color="error"
          size="large"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={openChangeModal}
          aria-label="change"
          color="success"
          size="large"
        >
          <DriveFileRenameOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
