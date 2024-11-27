import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function PerformanceChartComp({ data }) {
  // Asegurarse de convertir los porcentajes a números
  const formattedData = data.map((item) => ({
    tema: item.tema,
    porcentaje_exito: parseFloat(item.porcentaje_true), // Renombrado a "porcentaje_exito"
  }));

  return (
    <div style={{ width: "100%", height: 300 }}> {/* Altura reducida */}
      <ResponsiveContainer>
        <BarChart
          data={formattedData}
          layout="vertical" // Hace el gráfico de barras vertical
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
          <YAxis dataKey="tema" type="category" width={150} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="porcentaje_exito" fill="#FF0000" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChartComp;
