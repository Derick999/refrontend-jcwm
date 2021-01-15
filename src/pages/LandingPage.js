import React, { Component } from "react";
import { connect } from "react-redux";

class LandingPage extends Component {
	state = {};
	render() {
		return (
			<div className="d-flex ">
				<div></div>
				{this.renderCard()}
				<div></div>
			</div>
		);
	}
}
const mapStatetoProps = ({ product }) => {
	return {
		product: product.productList,
	};
};

export default connect(mapStatetoProps (LandingPage));
