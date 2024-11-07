import React from "react";
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
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actividadesData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.descripcion}</TableCell>
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.tipo}</TableCell> {/* Ejemplo de acceso a rewards */}
              <TableCell align="center">{row.tema}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                <IconButton title="Estadisticas general" onClick={()=>{ console.log(row.email);}}>
                  <BarChartIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}