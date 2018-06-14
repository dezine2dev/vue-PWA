<template>
	<nav>
		<div id="navWrap">
			<!-- <div id="navBack" @click="$router.go(-1)"> {{ $route.name != 'Intro' ? '<' : ' ' }} </div> -->
			<div v-if="$route.name != 'Intro' ? true : false" id="navBack" @click="$router.go(-1)"></div>
			<div id="navLogo"></div>
		</div>
	</nav>
</template>

<style>
	nav {
		width: 100%;
		height: 60px;
		border-bottom: 2px solid #71ccd7;
		background-color: #604ea0;
	}
	#navBack {
		color: #71ccd7;
		position: relative;
		left: 15px;
		font-size: 24px;
		cursor: pointer;
		transition: 1s all;
		background-image: url('../assets/arrow-left.svg');
		background-repeat: no-repeat;
		background-position: left center;
		background-size: 20px;
		width: 100px;
		float: left;
		height: 20px;
		margin-top: 20px;
	}
	#navBack:hover {
		font-size: 26px;
	}
	#navBack.intro {
		color:#604ea0 !important; 
	}
	#navBack,
	#navLogo {
		background-position: center;
		background-repeat: no-repeat;
	}
	#navLogo {
		background-image: url('../assets/logo.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		height: 60px;
		width: 50px;
		left: 50%;
		position: relative;
	}
</style>

<script>
	import ProgressCols from './ProgressCols'
	export default {
		name: "Header",
		components: {
			'ProgressCols' : ProgressCols
		},
		methods: {
			// isIntro: this.$route.name == 'Intro' ? true : false
		}
	}
</script>