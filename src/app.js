import 'regenerator-runtime/runtime';
import { h, render } from 'preact';

import { AsyncCom } from './com/AsyncCom.js';
import { Header } from './com/Header.js';
import { Router } from './com/Router.js';
import { Home } from './routes/Home.js';
import bg_url from '../static/green_grid.png';

//Clear the body element https://stackoverflow.com/a/3450726/1524693
let body = document.body;
while (body.firstChild) { body.removeChild(body.firstChild); }

//This was in ./static/all_the_things.css, but it was causing the page to load
//too slowly, so now it is pushed until the page is fully loaded.
setTimeout(() => {
	document.documentElement.style.backgroundImage = `url(${bg_url})`
});

const paths = {
	'#/home': () => <Home />,
	'#/links': () => <AsyncCom
		key='ln'
		getCom={async () => (await import('./routes/other.js')).Links} />,
	'#/photoshop': () => <AsyncCom
		key='ps'
		getCom={async () => (await import('./routes/Photoshop.js')).Photoshop} />,
	'#/chocolate_bread': () => <AsyncCom
		key='cb'
		getCom={async () => (await import('./routes/other.js')).ChocolateBread} />,
	'#/404': () => <AsyncCom
		key='nf'
		getCom={async () => (await import('./routes/other.js')).NotFound} />,
};

render(
	<div>
		<Header />
		<br />{/*Header is `display:inline-block`, so we need a manual break*/}

		<main>
			<Router paths={paths} notFound='#/404' defaultCond={/^(#\/?)?$/} defaultTo='#/home' debug={true} />
		</main>

		<hr />

		<AsyncCom key='footer' getCom={async () => (await import('./com/Footer.js')).Footer} />
	</div>,
	document.body
);
