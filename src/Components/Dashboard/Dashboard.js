import React from 'react';
import AreaCharts from '../AreaChart/AreaChart';
import BarCharts from '../BarChart/BarChart';
import Cell from '../Cell/Cell';
import Chart from '../Chart/Chart';

const Dashboard = () => {
   return (
      <div id='total-chart' className="sm:container md:container lg:container xl:container mx-auto px-4 pt-9">
         <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <AreaCharts></AreaCharts>
            <BarCharts></BarCharts>
            <Cell></Cell>
            <Chart></Chart>
         </div>
      </div>
   );
};

export default Dashboard;