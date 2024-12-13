import React, { useState } from "react";
import "./TodoApp.css";

const MicroFe02 = () => {
	const [test, setTest] = useState("hi");
	console.log(test);
	return (
		<div className="app">
			<div className="header">
				<h2>Micro Frontend 02 {test}</h2>
			</div>
		</div>
	);
};

export default MicroFe02;
