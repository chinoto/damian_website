import {h, Component} from 'preact';
import links from './links.json';
export default _=><div style='text-align:left;'>
	{links.map(group=>(
		<section>
			<h3>{group.title}</h3>
			<ul style='list-style:circle inside;margin-bottom:0.5em;max-width:30em;'>
				{group.entries.map(link=>(
					<li><a href={link[0]}>{link[1]}</a> {link[2]}</li>
				))}
			</ul>
		</section>
	))}
</div>;
