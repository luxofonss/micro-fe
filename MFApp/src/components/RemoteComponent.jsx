import React from "react";
import { loadComponent } from "../../utils";
import { useRemotes } from "../context/remotes";

const RemoteComponent = ({
	remote,
	component,
	remoteUrl,
	scope = "default",
	fallback = null,
	...props
}) => {
	const [remotes] = useRemotes();
	// const remoteUrl = findRemoteUrl(remote, remotes);
	// if (!remoteUrl)
	// 	return <div>Unable to Fetch: {`${remote}/${component}`}</div>;
	const Component = React.lazy(
		loadComponent(remote, remoteUrl, `./${component}`, scope)
	);

	return (
		// <ErrorBoundary>
		<React.Suspense fallback={fallback}>
			<Component {...props} />
		</React.Suspense>
		// </ErrorBoundary>
	);
};

export default RemoteComponent;
