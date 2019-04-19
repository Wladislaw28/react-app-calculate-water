import React,{Component} from "react";

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

class TemperatureInput extends Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<div className="temp_input_container">

				<h2 className="name_temp">{scaleNames[scale]}:</h2>

				<span className="input input--minoru">
					<input className="input__field input__field--minoru" value={temperature}
					   	onChange={this.handleChange} />
					<label className="input__label input__label--minoru">
						<span className="input__label-content input__label-content--minoru">Tempirature</span>
					</label>
				</span>

			</div>
		);
	}
}


export default TemperatureInput;