import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("should render without throwing an error",()=>{
	it("renders App",()=>{
		const wrapper = shallow(<App/>);
		expect(wrapper).toBeDefined();
	});
	
});