import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

class SpeedGuage extends Component {
    render() {
        return (
            <div>
                
                <ReactSpeedometer
                    maxValue={200}
                    value={this.props.speed}
                    needleColor="red"
                    startColor="green"
                    segments={10}
                    endColor="blue"
                    currentValueText="Overall WPM: ${value}"
                />
            </div>
        );
    }
}

export default SpeedGuage;
