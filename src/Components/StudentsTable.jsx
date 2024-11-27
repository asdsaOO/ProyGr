import React, { useState, useEffect, createContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import { SwitchComp } from './SwitcchComp';
import DeleteIcon from '@mui/icons-material/Delete';



const StudentsTable = (props) => {
  const usersData = props.datos;
  

  return (
    <TableContainer component={Paper} sx={{ margin: '20px 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nro</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Correo Electronico</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center">{row.apellido}</TableCell>
              <TableCell align="center">{row.email}</TableCell> {/* Ejemplo de acceso a rewards */}
              <TableCell align="center"><SwitchComp data={{id:row.id,habilitado:row.habilitado}}check={row.habilitado} onChange={props.modificarEstado}/></TableCell>
              <TableCell align="center">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export {StudentsTable}