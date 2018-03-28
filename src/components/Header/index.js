import React, { Component } from "react";
import { translate } from "react-i18next";
import ham from "./hamburger.png";
import "./Header.css";

class Header extends Component {
	state = {
		show : false,
	};

	handleChangeLang = e => {
		this.props.i18n.changeLanguage(e.target.value);
	};
	
	render() {
		console.log("this.props.i18n: ",this.props.i18n);
		
		return (
			<div className='header'>
				<div className="container">
					<div className="logo">

						<img src='http://www.integrify.fi/sites/all/themes/integrify/logo.svg' alt='integrify-logo'/>
					</div>
					<nav>
						<select
							onChange={e => this.handleChangeLang(e)}
							className="form-control"
							id="exampleFormControlSelect1"
						>
							<option value="en">English</option>
							<option value="fi">Finnish</option>
						</select>
						<div className="log"> Logout </div>
						<div className="hamburger" onClick={ () => this.setState({ show : !this.state.show}) }><img src={ham} alt='' />
							<ul className={this.state.show ? "show": "hide" }>
								<li>Logout</li>
							</ul>
						</div>
					
					</nav>
				</div>
			</div>
		);}
}
export default translate()(Header);
