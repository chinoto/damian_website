import { h } from 'preact';
import self_url from '../../static/2011-05-26_19.00.54_crop_192x192.jpg';
export const Home = () => <div>
	<div style='display:inline-table;'>
		<img class='loading_bg' style='display:table-cell;width:8em;height:8em;' alt='Picture of Damian' src={self_url} />
		<div style='display:table-cell;vertical-align:top;max-width:25em;padding-left:0.5em;'>
			<b>&lt;-</b> So, there's me. I play games, play with code, binge on anime, and babble with (help) people on IRC.
		</div>
	</div>
</div>;
