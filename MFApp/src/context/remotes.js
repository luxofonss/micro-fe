import React, { useContext, useState } from "react";

const initRemotes = [
	{
		name: "ShortCardInHost",
		url: "http://localhost:3001/remoteEntry.js",
	},
];

const initState = {
	remotes: initRemotes,
	updateRemoteUrl: () => {},
};

export const RemotesContext = React.createContext(initState);

export const STORAGE_KEY = "fruit-remotes";

const hydrateRemotes = () => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) {
				return parsed;
			}
		}
		return [];
	} catch {
		return [];
	}
};

export const RemotesProvider = ({ children }) => {
	const storedRemotes = hydrateRemotes();
	const [remotes, setRemotes] = useState(
		storedRemotes.length > 0 ? storedRemotes : initRemotes
	);

	const updateRemoteUrl = (name, newUrl) => {
		setRemotes((prevRemotes) => {
			const newRemotes = [...prevRemotes];
			const remoteIdx = newRemotes.findIndex((r) => r.name === name);
			if (remoteIdx > -1) {
				newRemotes[remoteIdx].url = newUrl;
			}
			storeRemotes(newRemotes);
			return newRemotes;
		});
	};
	// Storing remote URLs on global object so we can access them in other apps without
	// this provider being initialized.
	// @ts-ignore
	window.fsRemotes = remotes;
	const RemotesCtx = {
		remotes,
		updateRemoteUrl,
	};
	return (
		<RemotesContext.Provider value={RemotesCtx}>
			{children}
		</RemotesContext.Provider>
	);
};

export default RemotesProvider;

export const useRemotes = () => {
	const { updateRemoteUrl } = useContext(RemotesContext);
	// @ts-ignore
	return [window.fsRemotes, updateRemoteUrl];
};
