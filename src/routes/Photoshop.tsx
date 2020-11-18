import { h } from 'preact';

import sigs from '../../static/sigs/*.png';

export const Photoshop = () => <div>
	<b>Photoshop Signature Gallery</b><br />(I no longer have a copy, so don't expect new ones)
	<div id='sigs'>
		<img alt='' class='wdh315p' src={sigs.chinotolozsig} /><img alt='' class='wdh1' src={sigs.chinotolozavatar} /><br />
		<img alt='' class='wdh315p' src={sigs.sean3} /><br />
		<img alt='' class='wdh315p' src={sigs.grandpa} /><br />
		<img alt='' class='wdh315p' src={sigs.joe_bsd} /><br />
		<img alt='' class='wdh315p' src={sigs.chuck_motorcycle} /><br />
		<img alt='' class='wdh315p' src={sigs.sonic_team} /><br />
		<img alt='' class='wdh315p' src={sigs.greenday} /><br />
		<img alt='' class='wdh315p' src={sigs.halo_space} /><img alt='' class='wdh1' src={sigs.halo_space_avatar} /><br />
		<img alt='' class='wdh315p' src={sigs.halo_wormhole} /><br />
		<img alt='' class='wdh315p' src={sigs.danielle_tiger} /><br />
		<img alt='' class='wdh315p' src={sigs.xao_xiong} /><br />
		<img alt='' class='wdh315p' src={sigs.victoria} /><br />
	</div>
</div>
