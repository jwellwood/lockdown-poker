import React from 'react';
import { Chart } from 'react-google-charts';

const PlayerLinGraph = ({ data }) => {
  const options = {
    title: 'Position by game',
    hAxis: { title: 'Games', viewWindow: { min: 1 }, format: '0' },
    vAxis: {
      title: 'Position',
      viewWindow: { min: 1 },
      direction: -1,
      format: '0',
    },
    legend: 'none',
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
    lineWidth: 5,
    colors: ['red'],
  };
  const chartIds = ['x', 'position'];
  const mappedData = data.map((item, i) => [i + 1, +item]);
  const chartData = [chartIds, ...mappedData];

  return (
    <Chart
      chartType='LineChart'
      data={chartData}
      options={options}
      width='100%'
      height='300px'
      legendToggle
    />
  );
};

export default PlayerLinGraph;
