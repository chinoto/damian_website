import {h, render, Component} from 'preact';

import AsyncCom from './com/AsyncCom.js';
import Header   from './com/Header.js';
import Router   from './com/Router.js';
import Home     from './routes/Home.js';
import NotFound from './routes/NotFound.js';

//Clear the body element https://stackoverflow.com/a/3450726/1524693
let body=document.body;
while(body.firstChild){body.removeChild(body.firstChild);}

//This was in ./static/all_the_things.css, but it was causing the page to load
//too slowly, so now it is pushed until the page is fully loaded.
setTimeout(_=>{
	document.documentElement.style.backgroundImage='url(static/green_grid.png)'
});

const paths={
	'#/home'           : _=><Home/>,
	'#/links'          : _=><AsyncCom key='ln' getCom={async _=>(await import(/* webpackChunkName: "other_routes" */'./routes/Links.js'         )).default}/>,
	'#/photoshop'      : _=><AsyncCom key='ps' getCom={async _=>(await import(/* webpackChunkName: "other_routes" */'./routes/Photoshop.js'     )).default}/>,
	'#/chocolate_bread': _=><AsyncCom key='cb' getCom={async _=>(await import(/* webpackChunkName: "other_routes" */'./routes/ChocolateBread.js')).default}/>,
	'#/404'            : _=><AsyncCom key='nf' getCom={async _=>(await import(/* webpackChunkName: "other_routes" */'./routes/NotFound.js'      )).default}/>,
};

render(
	<div>
		<Header/>
		<br/>{/*display:inline-block is awkward, but also nice...*/}

		<main>
			<Router paths={paths} notFound='#/404' defaultCond={/^(#\/?)?$/} defaultTo='#/home' debug={true}/>
		</main>

		<hr/>

		<AsyncCom key='footer' getCom={async _=>(await import(/* webpackChunkName: "footer" */'./com/Footer.js')).default}/>
	</div>,
	document.body
);
