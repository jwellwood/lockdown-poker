import React from 'react';
import { Chart } from 'react-google-charts';
import { getOrdinals } from 'shared/utils/getOrdinals';

const PlayerPieChart = ({ positionArray }) => {
  const chartIds = ['position', 'frequency'];
  const ordinalLabels = positionArray.map((data) => {
    return `${data}${getOrdinals(data)}`;
  });
  const countOccurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const occurrence = countOccurrences(ordinalLabels);
  const mappedData = Object.entries(occurrence).reverse();
  const chartData = [chartIds, ...mappedData];

  const options = {
    title: 'Position Frequency',
    pieSliceText: 'value',
    pieHole: 0.4,
  };

  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={options}
    />
  );
};

export default PlayerPieChart;
