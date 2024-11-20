import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

function ActivityLineChartComp({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Aquí asumes que data es el resultado de la función `fn_registro_actividad`
    const formattedData = data.map((item) => ({
      day: item.dia_semana,
      lecciones: item.lecciones,
    }));
    setChartData(formattedData);
  }, [data]);

  return (
    <Box sx={{ marginTop: 3 }}>
      <Paper sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h6">Lecciones por Día de la Semana</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lecciones" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}

export default ActivityLineChartComp;