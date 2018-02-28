import React from "react";
import "./index.css";
import {Button} from "../Button-generic/Buttons";
import loader from "../../assets/loading.svg";

const handleClick = ()=>{
	console.log("Hello world from clicking button component");
};

const ButtonDisplay = () => {
	return (
		<div>
			<Button icon={loader} type="primary-button" label="Login with Integrify" onclick={handleClick} />
		</div>
	);
	
};

export default ButtonDisplay;