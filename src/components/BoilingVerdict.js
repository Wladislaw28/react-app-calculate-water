import React from "react";

const BoilingVerdict = (props) => {
	if (props.celsius >= 100) {
		return <p>Water boils</p>
	}
	return <p>Water does not boil</p>
};

export default BoilingVerdict;