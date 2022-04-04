import React from "react";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart = () => {
  const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
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
        "revenue": 61000
    }
]
  return (
    <div>
      <h1 className='text-4xl p-6 '>LineChart</h1>
      <LineChart width={400} height={300} data={data}>
        <Line dataKey={'investment'} stroke='#000CCD'></Line>
        <Line dataKey={'sell'} stroke='#00CD10'></Line>
        <Line dataKey={'revenue'} stroke='#CD0098'></Line>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dataKey='month'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Chart;