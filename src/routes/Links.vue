<template>
	<div style='text-align:left;'>
		<section v-for='group in links'>
			<h3>{{group.title}}</h3>
			<ul style='list-style:circle inside;margin-bottom:0.5em;max-width:30em;'>
				<li v-for='link in group.entries'>
					<a :href='link[0]'>{{link[1]}}</a> {{link[2]}}
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import links from './links.json';
	export default {
		data:_=>({links})
	};
</script>
