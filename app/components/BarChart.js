import React from 'react';
import { BarChart } from 'react-d3-basic';
import { pick } from 'underscore';

const chartProps = {
  width : 600,
  height: 415,
  title : 'Amount of Rainfall',
  chartSeries: [{
    field : 'amount',
    name  : 'Amount'
  }],
  x     : (d) => d.day,
  yLabel: 'Rainfall Amount',
  xScale: 'ordinal',
  xLabel: 'Days',
};

export default (props) => {
  const { days } = props;
  return (
    <div>
      <BarChart data={days} {...chartProps} />
    </div>
  )
}
