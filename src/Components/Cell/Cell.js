import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Cell = () => {
  const data = [
    {
        "month": "Mar",
        "investment": 1000000,
        "sell": 241,
        "revenue": 12401
    },
    {
        "month": "Apr",
        "investment": 400000,
        "sell": 423,
        "revenue": 18000
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 200000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 51000
    }
]
  return (
  <div>
      <h1 className='text-4xl p-6 '>Investment vs Revenue</h1>
  <PieChart width={430} height={250}>

      <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={90} fill="#0695C2" minAngle='320' label/>

      <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={0} outerRadius={70} fill="#3134CF" label />

      <Tooltip></Tooltip>
  </PieChart>  
  </div>
  );
};

export default Cell;
