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
  Typography,
  Tooltip,
  Pagination // Importamos Pagination
} from '@mui/material';
import { Preview } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

function LeccionesTableComp({ data, activarModal }) {
  const leccionesData = data;

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
  const currentData = leccionesData
    ? leccionesData.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : [];

  return (
    <>
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
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{index + 1 + (page - 1) * rowsPerPage}</TableCell>
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
                      <IconButton onClick={() => { activarModal(row.id_leccion) }}>
                        <Preview />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body1" color="textSecondary">No hay datos disponibles...</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Numeración de páginas con Pagination */}
      <Pagination
        count={Math.ceil((leccionesData ? leccionesData.length : 0) / rowsPerPage)} // Calcula el total de páginas
        page={page}
        onChange={handleChangePage}
        color="primary"
        siblingCount={1} // Muestra los números adyacentes al número actual
        boundaryCount={1} // Muestra los números de página al principio y al final
      />
    </>
  );
}

export { LeccionesTableComp };
