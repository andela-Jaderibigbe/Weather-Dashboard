import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';
import { isEmpty, isUndefined } from 'underscore';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Slider from '../components/Slider';
import { MIN_TEMPERATURE, MAX_TEMPERATURE, MIN_PRESSURE, MAX_PRESSURE } from '../constants';

const DATA = [{
  request: 'Amount of rainfall by day',
    "days": [{
      day: '1',
      amount: '50'
    }, {
      day: '2',
      amount: '10'
    }, {
      day: '3',
      amount: '10'
    }, {
      day: '4',
      amount: '150'
    }, {
      day: '5',
      amount: '130'
    }, {
      day: '6',
      amount: '45'
    }, {
      day: '7',
      amount: '10'
    }]
}];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temprature : null,
      pressure   : null,
      sliderValues: [],
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    this.props.fetchWeather();
  }

  handleUpdate(field, values) {
    const [ newMin, newMax ] = values;
    const [ currentMin=newMin, currentMax=newMax ] = this.state.sliderValues;

    const changedValue = currentMin !== newMin ? values[0] : values[1];

    this.setState({ sliderValues: values, [field]: changedValue });
  }

  render() {
    const { dashboard: { days=[] } } = this.props;
    const { pressure, temprature } = this.state; 
    return (
    	<div className="dashboard-wrapper">
        <div className="section">
          <div className="sub-section">
            <div className="section-title">
              <h3>Pressure [hPa]</h3>
            </div>
            <Slider field="pressure" defaultValue={[MIN_PRESSURE, MAX_PRESSURE]} handleUpdate={this.handleUpdate}  />
          </div>
          <div className="sub-section">
            <LineChart days={days} pressure={pressure || MIN_PRESSURE} temperature={temprature || MIN_TEMPERATURE } />
          </div>          
        </div>
        <div className="section">
          <div className="sub-section">
            <div className="section-title">
              <h3>Temperature [˚C]</h3>
            </div>
            <Slider field="temprature" defaultValue={[MIN_TEMPERATURE, MAX_TEMPERATURE]} handleUpdate={this.handleUpdate} />
          </div>
          <div className="sub-section">
            <BarChart days={days} />
          </div>          
        </div>        
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { dashboard } = state;
  return { dashboard };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);