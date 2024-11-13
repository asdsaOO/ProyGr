
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
  Typography
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function ActivitiesTableComponent(props){
  const actividadesData=props.data;

  return(
    <TableContainer component={Paper} sx={{ margin: '20px 0' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nro</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Tema</TableCell>
            <TableCell align="center">Subtema</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actividadesData? actividadesData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.descripcion}</TableCell>
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.tipo}</TableCell> {/* Ejemplo de acceso a rewards */}
              <TableCell align="center">{row.tema}</TableCell>
              <TableCell align="center">{row.subtema}</TableCell>
              <TableCell align="center">
                <IconButton title="Actualziar datos" onClick={()=>{props.openUpModal(row)}}>
                  <EditIcon/>
                </IconButton>
                <IconButton title="Eliminar actividad" onClick={()=>{props.deleteItem(row.id)}}>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          )):
          <a>no hay datos..</a>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {ActivitiesTableComponent}