import "./chartProduct.css";
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import React from 'react'

export default function ChartProduct({ title, data, dataKey,grid, bar}) {
  return (
    <div className="chartProduct">
    <h3 className="chartProductTitle">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>

        
      </ResponsiveContainer>
    </div>
  );
}
