import React from 'react';
import d3 from 'd3';
import { LineChart } from 'react-d3-basic';

const calculateChanceOfRain = (pressure, temprature, data) => {
	const { amount, day } = data;
	const rainAmount = parseInt(amount, 10);
  const score = Math.log(rainAmount + 1) * Math.log(pressure - 929) * Math.log(temprature - 9);
  const mean = Math.min(Math.max(score, 0), 100);
  const upperBound = Math.min(1.5 * mean, 100);
  const lowerBound = Math.min(0.5 * mean, 0);

  return { 
  	day,
  	amount, 
  	mean 			: mean.toString(), 
  	lowerBound: lowerBound.toString(), 
  	upperBound: upperBound.toString(), 
  };
}

const chartProps = {
  width : 600,
  height: 400,
  title : 'Chance of Rain',
  margins: {
  	left	: 100, 
  	right	: 100, 
  	top		: 50, 
  	bottom: 50
  },
  chartSeries: [{
    field : 'upperBound',
    name  : 'Upper Bound',
    color	: '#1f77b4'
  },
  {
    field : 'mean',
    name  : 'Mean',
    color	: '#ff7f0e' 	
  },
  {
  	field : 'lowerBound',
    name  : 'Lower Bound',
    color	: '#2ca02c',
    area  : true
  }],
  x     : (d) => d.day,
  xScale: 'ordinal',
  xLabel: 'Days',
  yLabel: 'Rain Probability'
};

export default (props) => {
  const { days, pressure, temperature } = props;
  const data = days.map(day => calculateChanceOfRain(pressure, temperature, day));
  return ( 
  	<div>
      <LineChart
      	data={data}
      	{...chartProps}
      />
    </div>
  );
}
