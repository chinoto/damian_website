import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

//Also functions as a light-weight version of preact-async-route
export function AsyncCom({ getCom }: { getCom: () => Promise<() => h.JSX.Element> }) {
	let [Com, setCom] = useState(<div>Loading...</div>);

	useEffect(() => {
		getCom().then((Com: () => h.JSX.Element) => setCom(Com));
	}, []);

	return Com;
}
