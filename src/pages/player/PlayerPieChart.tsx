import React from 'react';
import { Chart } from 'react-google-charts';
import { getOrdinals } from 'shared/utils/functions';
import { useTheme } from '@material-ui/core';

interface Props {
  positionArray: number[];
}

const PlayerPieChart: React.FC<Props> = ({ positionArray }) => {
  const theme = useTheme();
  const chartIds = ['position', 'frequency'];
  const ordinalLabels = positionArray
    .map((data) => {
      return `${data}${getOrdinals(data)}`;
    })
    .sort();

  const countOccurrences = (arr: string[]) =>
    arr.reduce(function (acc: any, curr: any) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});

  const occurrence = countOccurrences(ordinalLabels);
  const mappedData = Object.entries(occurrence);
  const chartData = [chartIds, ...mappedData];

  const options = {
    title: 'Position Frequency',
    pieSliceText: 'value',
    pieHole: 0.4,
    fontName: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
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
