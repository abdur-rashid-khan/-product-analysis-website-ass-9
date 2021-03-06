import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const AreaCharts = () => {
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
    <div >
        <h1 className='text-4xl p-6 '>Investment vs Revenue</h1>
        <AreaChart
          width={430}
          height={250}
          data={data}
        >
          <defs>
            <linearGradient id="investment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor=" rgb(235, 41, 154)" stopOpacity={0.8} />
              <stop offset="95%" stopColor=" rgb(235, 41, 154)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis  />
          <CartesianGrid strokeDasharray="0" />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#investment)"
          />
          <Area type='monotone'
          dataKey={'revenue'}
          stroke=' rgb(235, 41, 154)'
          fillOpacity={1}
            fill="url(#revenue)"
          ></Area>
        </AreaChart>
    </div>
  );
};

export default AreaCharts;
