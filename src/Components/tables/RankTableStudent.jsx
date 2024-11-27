import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Tooltip } from '@mui/material';
import { ArrowDropDown, ArrowDropUp, BarChart } from '@mui/icons-material';

function RankTableStudent({ data }) {
  const competidores = data || []; // Aseguramos que `competidores` sea un array vacío si no hay datos

  return (
    <TableContainer component={Paper} sx={{
      margin: '10px auto',
      borderRadius: '10px',
      boxShadow: 2,
      maxWidth: '90%',
      overflowX: 'auto'
    }}>
      <Table sx={{
        minWidth: 500,
        tableLayout: 'fixed',
        borderCollapse: 'collapse'
      }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold', padding: '4px', fontSize: '0.8rem' }}>Posición</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold', padding: '4px', fontSize: '0.8rem' }}>Nombre</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold', padding: '4px', fontSize: '0.8rem' }}>Puntaje</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold', padding: '4px', fontSize: '0.8rem' }}>Lecciones</TableCell>
            <TableCell align="center" sx={{ backgroundColor: '#d11108', color: 'white', fontWeight: 'bold', padding: '4px', fontSize: '0.8rem' }}>Clasificación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competidores.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ padding: '4px' }}>
                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '0.8rem' }}>
                  No hay datos disponibles...
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            competidores.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: row.clasificacion === true ? '#d4edda' : row.clasificacion === false ? '#f8d7da' : 'transparent',
                  height: '30px' 
                }}
              >
                <TableCell align="center" sx={{ padding: '4px', fontSize: '0.75rem' }}>{index + 1}</TableCell>
                <TableCell align="center" sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.nombre} {row.apellido}</TableCell>
                <TableCell align="center" sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.puntaje}</TableCell>
                <TableCell align="center" sx={{ padding: '4px', fontSize: '0.75rem' }}>{row.total}</TableCell>
                <TableCell align="center" sx={{ padding: '4px', fontSize: '0.75rem' }}>
                  {row.clasificacion === true ? <ArrowDropUp color="success" /> : row.clasificacion === false ? <ArrowDropDown color="error" /> : <Typography>-</Typography>}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { RankTableStudent };
  