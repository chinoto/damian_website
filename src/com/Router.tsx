import { h } from 'preact';
import { useEffect, useRef, useState, Ref } from 'preact/hooks';

export function Router(
	{ paths, notFound, defaultCond, defaultTo, debug }: { paths: Record<string, () => h.JSX.Element>, notFound: string, defaultCond: RegExp, defaultTo: string, debug?: boolean }
) {
	let [path, setPathDirect] = useState("");
	// Ensure the setPath function used by the hashchange listener is always using the latest values
	let setPathRef: Ref<Function> = useRef();
	setPathRef.current = function setPath() {
		let path = location.hash

		if (debug) { console.log(`Routed to '${path}'`); }
		if (defaultCond.test(path)) {
			path = defaultTo;
			history.replaceState(null, document.title, path);
			if (debug) { console.log(`Redirected to '${path}'`); }
		}
		if (!paths[path]) {
			path = notFound;
			history.replaceState(null, document.title, path);
			if (debug) { console.log(`Redirected to '${path}' due to invalid path`); }
		}
		setPathDirect(path);
	}

	useEffect(() => {
		setPathRef.current();
		let proxy = () => setPathRef.current();
		window.addEventListener("hashchange", proxy);
		return () => window.removeEventListener("hashchange", proxy);
	}, []);

	return paths[path] && paths[path]() || 'Routing Error';
}
