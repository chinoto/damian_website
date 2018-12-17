import changelog from './changelog.json';
import {h, Component} from 'preact';
export default _=><footer>
	<h1>Changelog</h1>
	<ol id='changelog'>
		{changelog.map(change=>(<li>
			<h2>{change[0]}</h2>
			<div>
				{change[1].split('\n').map(line=>(<p>{line}</p>))}
			</div>
		</li>))}
	</ol>
</footer>;
