import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ActivitiesTableComponent(props) {
  const actividadesData = props.data;

  // Estados para la paginación
  const [page, setPage] = useState(1); // Página actual
  const [rowsPerPage, setRowsPerPage] = useState(10); // Elementos por página

  // Manejar el cambio de página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Manejar el cambio en el número de filas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Regresar a la primera página al cambiar el número de filas
  };

  // Obtener los elementos para mostrar en la página actual
  const currentData = actividadesData
    ? actividadesData.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : [];

  return (
    <>
      <TableContainer component={Paper} sx={{ margin: '20px 0' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#d32f2f' }}> {/* Cabecera roja */}
              <TableCell align="center" sx={{ color: '#fff' }}>Nro</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Descripcion</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Fecha</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Tipo</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Tema</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Subtema</TableCell>
              <TableCell align="center" sx={{ color: '#fff' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <TableRow key={row.id} sx={{ height: 40 }}> {/* Altura de fila más pequeña */}
                  <TableCell align="center">{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                  <TableCell align="center">{row.descripcion}</TableCell>
                  <TableCell align="center">{row.fecha}</TableCell>
                  <TableCell align="center">{row.tipo}</TableCell>
                  <TableCell align="center">{row.tema}</TableCell>
                  <TableCell align="center">{row.subtema}</TableCell>
                  <TableCell align="center">
                    <IconButton title="Actualizar datos" onClick={() => props.openUpModal(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton title="Eliminar actividad" onClick={() => props.deleteItem(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography>No hay datos...</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Numeración de páginas con Pagination */}
      <Pagination
        count={Math.ceil((actividadesData ? actividadesData.length : 0) / rowsPerPage)} // Calcula el total de páginas
        page={page}
        onChange={handleChangePage}
        color="primary"
        siblingCount={1} // Muestra los números adyacentes al número actual
        boundaryCount={1} // Muestra los números de página al principio y al final
      />
    </>
  );
}

export { ActivitiesTableComponent };
