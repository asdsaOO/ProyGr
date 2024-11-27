import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function LessonsHistorialTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Tema</strong></TableCell>
            <TableCell><strong>Enunciado</strong></TableCell>
            <TableCell><strong>Resultado</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.titulo}</TableCell>
              <TableCell>{row.enunciado}</TableCell>
              <TableCell 
                sx={{
                  backgroundColor: row.resultado ? 'green' : 'red',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                {row.resultado ? 'Bien' : 'Mal'}
              </TableCell>
            </TableRow>
          )) : <TableRow><TableCell colSpan={3}>NO HAY DATOS</TableCell></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LessonsHistorialTable;
