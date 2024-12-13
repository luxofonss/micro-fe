import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MicroFe02 from "./MicroFe02.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<MicroFe02 />
	</StrictMode>
);
