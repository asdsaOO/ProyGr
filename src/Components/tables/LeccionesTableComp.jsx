import { useState, useEffect, createContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Tooltip
} from '@mui/material';
import { Preview } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

function LeccionesTableComp({ data }) {
  const leccionesData = data;

  return (
    <TableContainer component={Paper} sx={{ margin: '20px 0', borderRadius: '10px', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold' }}>Nro</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold' }}>Fecha</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold' }}>Titulos</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold' }}>Puntaje</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leccionesData ? leccionesData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.fechcre}</TableCell>
              <TableCell align="center">{row.titulos}</TableCell>
              <TableCell 
                align="center"
                sx={{
                  color: row.puntaje > 50 ? 'green' : 'red', 
                  fontWeight: 'bold'
                }}
              >
                {row.puntaje}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="ver leccion" arrow>
                  <IconButton onClick={() => { }}>
                    <Preview />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="body1" color="textSecondary">No hay datos disponibles...</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { LeccionesTableComp };
