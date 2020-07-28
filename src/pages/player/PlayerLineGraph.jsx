import React from 'react';
import { Chart } from 'react-google-charts';
import { useTheme } from '@material-ui/core';

const PlayerLinGraph = ({ data }) => {
  const theme = useTheme();
  const options = {
    title: 'Position by game',
    hAxis: {
      title: 'Games',
      viewWindow: { min: 1 },
      format: '0',
      minorGridlines: { count: 0 },
    },
    vAxis: {
      title: 'Position',
      viewWindow: { min: 1 },
      direction: -1,
      format: '0',
      minorGridlines: { count: 0 },
    },
    legend: 'none',
    animation: {
      startup: true,
      easing: 'inAndOut',
      duration: 1500,
    },
    lineWidth: 2,
    colors: [theme.palette.primary.main],
    pointSize: 5,
    fontName: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
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
