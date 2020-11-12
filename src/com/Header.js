import { h } from 'preact';
export const Header = () => <header id='header'>
	<div id='banner'>
		Damian's Website!
		<small style='display:block;font-size:0.35em;'>
			I couldn't think of anything better 😛
		</small>
	</div><br />
	<nav><ul>
		<li><a href='#/home'     >Home</a></li>
		<li><a href='#/links'    >Links</a></li>
		<li><a href='#/photoshop'>Photoshop</a></li>
		<li><a href='#/chocolate_bread'>Chocolate Bread</a></li>
	</ul></nav>
</header>;
