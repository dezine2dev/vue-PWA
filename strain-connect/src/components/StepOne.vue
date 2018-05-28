<template>
	<div>
		<h1>Ailment</h1>
		<h2>Choose One</h2>
		<h3>Don't worry, you can focus on additional ailments bu adding to your profiles later.</h3>
		<md-field>
			<label>Search</label>
			<md-input placeholder="Search" type="text"></md-input>
		</md-field>
		<Ailment 
			:for="(ailment, index) in ailments"
			:title="ailments['index']['title']"
			:subtitle="ailments['index']['subtitle']"
		></Ailment>
	</div>
</template>

<style></style>

<script>
	import Ailment from './Ailment'
	export default {
		name: 'StepOne',
		components: {
			Ailment
		}
	}
</script>