import React, { Component } from 'react';
import TemperatureInput from "./components/TemperatureInput";
import BoilingVerdict from "./components/BoilingVerdict";

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class App extends Component {

	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {temperature: '', scale: 'c'};
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

  render() {
	  const scale = this.state.scale;
	  const temperature = this.state.temperature;
	  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
    	<div className="wrapper">
				<div className="container-fluid	">
					<div className="row no-getters">
						<div className="col-sm-12 name_app">
							<a href="#" className="logo">Water<br/>Boils</a>
						</div>
						<div className="col-sm-12 instruction">
							<p>Enter the temperature and <br/>
								see the result.
							</p>
						</div>
						<div className="col-sm-12 input_group">
							<TemperatureInput
								scale="c"
								temperature={celsius}
								onTemperatureChange={this.handleCelsiusChange} />

							<TemperatureInput
								scale="f"
								temperature={fahrenheit}
								onTemperatureChange={this.handleFahrenheitChange} />
						</div>


						<div className="col-sm-12 result">
							<BoilingVerdict
								celsius={parseFloat(celsius)} />
						</div>


					</div>
				</div>
		</div>
    );
  }
}

export default App;
