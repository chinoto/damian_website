import 'regenerator-runtime/runtime';
import { h, render } from 'preact';

import { AsyncCom } from './com/AsyncCom';
import { Header } from './com/Header';
import { Router } from './com/Router';
import { Home } from './routes/Home';
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
		getCom={async () => (await import('./routes/other')).Links} />,
	'#/photoshop': () => <AsyncCom
		key='ps'
		getCom={async () => (await import('./routes/Photoshop')).Photoshop} />,
	'#/chocolate_bread': () => <AsyncCom
		key='cb'
		getCom={async () => (await import('./routes/other')).ChocolateBread} />,
	'#/404': () => <AsyncCom
		key='nf'
		getCom={async () => (await import('./routes/other')).NotFound} />,
};

render(
	<div>
		<Header />
		<br />{/*Header is `display:inline-block`, so we need a manual break*/}

		<div>

		</div>
		<main>
			<Router paths={paths} notFound='#/404' defaultCond={/^(#\/?)?$/} defaultTo='#/home' debug={true} />
		</main>

		<hr />

		<AsyncCom key='footer' getCom={async () => (await import('./com/Footer')).Footer} />
	</div>,
	document.body
);
