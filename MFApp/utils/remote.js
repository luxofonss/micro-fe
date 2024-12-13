export const findRemoteUrl = (remoteName, remotes) => {
	const remote = remotes.find((r) => r.name === remoteName);
	return remote?.url || "";
};
