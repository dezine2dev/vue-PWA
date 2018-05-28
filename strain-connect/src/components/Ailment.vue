<template>
	<div class="ailment">
<!-- 		<div></div>
 -->	<h1>{{ title }}</h1>
		<h2>{{ subtitle }}</h2>
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		name: 'Ailment',
		props: ['title', 'subtitle']
	}
</script>