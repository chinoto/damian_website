import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from './com/Header.vue';
import Footer from './com/Footer.vue';

import Home           from './routes/Home.vue';
import Links          from './routes/Links.vue';
import Photoshop      from './routes/Photoshop.vue';
import ChocolateBread from './routes/ChocolateBread.vue';
Vue.use(VueRouter);

new Vue({
	el: 'body',
	router:new VueRouter({
		routes:[
			{path:'/home'           ,component:Home},
			{path:'/links'          ,component:Links},
			{path:'/photoshop'      ,component:Photoshop},
			{path:'/chocolate_bread',component:ChocolateBread}
		]
	}),
	data:_=>({
		errors:''
	}),
	render: h => (<body>
		<Header/>

		<br/>
		<main>
			<router-view/>
		</main>

		<hr/>
		<Footer/>
	</body>)
});
