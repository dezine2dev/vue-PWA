<template>
	<div 
		class="stepImg"
		:style="`backgroundImage: url(${src})`"
	></div>
</template>

<style>
	.wrap > * {
		color: white;
	}
	.md-field,
	label,
	.md-input {
		background-color: #604EA0;
		color: white;
	}
</style>

<script>
	export default {
		name: 'Step',
		mounted(){
			switch(this.$store.state.step){
				case 1 : this.src = '../assets/1.png'; break;
				case 2 : this.src = '../assets/2.png'; break;
				case 3 : this.src = '../assets/3.png'; break;
				case 4 : this.src = '../assets/4.png'; break;
				case 5 : this.src = '../assets/5.png'; break;
			}
		},
		data: function(){
			return {
				src: 'undefined'
			}
		}	
	}
</script>