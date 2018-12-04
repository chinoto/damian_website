<template>
	<footer>
		<h1>Changelog</h1>
		<ol id='changelog'>
			<li v-for='change in changelog'>
				<h2>{{change[0]}}</h2>
				<div>
					<p v-for="line in change[1].split('\n')">{{line}}</p>
				</div>
			</li>
		</ol>
	</footer>
</template>
<script>
	import changelog from './changelog.json';
	export default {
		data:_=>({changelog})
	};
</script>
