import React, { PropTypes, Component } from 'react';
import Slider from 'rc-slider';

const style = { width: 400, margin: 50 };

export default class DynamicBounds extends Component {
  constructor(props) {
    super(props);

    const { defaultValue } = this.props;
    this.state = {
      min: defaultValue[0],
      max: defaultValue[1]
    }

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
  }

  onSliderChange(values) {
    const { changedKey } = this.state;
    const { field } = this.props;
    this.props.handleUpdate(field, values);
  }

  onMinChange(e) {
    let { min } = this.state;
    this.setState({
      min: +e.target.value || min,
    });
  }

  onMaxChange(e) {
    const { max } = this.state;
    this.setState({
      max: +e.target.value || max
    });
  }

  render() {
    const { defaultValue } = this.props;
    return (
      <div style={style}>
        <Slider
          range 
          defaultValue={defaultValue} 
          min={this.state.min} 
          max={this.state.max}
          onChange={this.onSliderChange} />
      </div>
    );
  }  
}

DynamicBounds.propTypes = { 
  field       : PropTypes.string,
  defaultValue: PropTypes.array,
  handleUpdate: PropTypes.func
}
