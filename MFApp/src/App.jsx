import React from "react";

import RemoteComponent from "./components/RemoteComponent.jsx";
import RemotesProvider from "./context/remotes.js";
import "./style.css";

const App = () => {
	return (
		<RemotesProvider>
			<div>
				<RemoteComponent
					fallback="Loading micro frontend..."
					remote="ToDoApp"
					component="TodoApp"
					remoteUrl="http://localhost:3002"
				/>
				<RemoteComponent
					fallback="Loading micro frontend..."
					remote="MicroFe02"
					component="MicroFe02"
					remoteUrl="http://localhost:3003"
				/>
			</div>
		</RemotesProvider>
	);
};

export default App;
