import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

export default function useTables(rcords, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TbleHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCells) => (
            <TableCell></TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  return {
    TblContainer,
    TbleHead,
  };
}
