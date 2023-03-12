import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { FlowersType, Iparams } from '../types/types';

export default function Pagination({
  cart,
  setSearchParams,
}: {
  cart: FlowersType[];
  setSearchParams: (arg0: Iparams) => void;
}) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem('page')) ?? 0;
  });

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    setSearchParams({
      page: newPage.toString(),
      rowsPerPage: rowsPerPage.toString(),
    });
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setSearchParams({
      page: page.toString(),
      rowsPerPage: event.target.value.toString(),
    });
  };

  return (
    <TablePagination
      component="div"
      count={cart.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 15, 20]}
    />
  );
}
