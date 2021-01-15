import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
} from "reactstrap";

class NavBar extends Component {
	state = { isOpen: false };
	render() {
		const { userEmail } = this.props;
		return (
			<div>
				<Navbar 
					style={{ backgroundColor: "#133496", color: "red" }}
					dark 
					expand="md"
					>
					<NavbarBrand href="/"><h2><b>Inventory</b></h2></NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar></Collapse>
				</Navbar>
			</div>
		);
	}
}


export default NavigationBar;
