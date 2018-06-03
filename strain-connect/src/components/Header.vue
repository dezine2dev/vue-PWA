<template>
	<nav>
		<div id="navWrap">
			<div id="navBack" @click="$router.go(-1)"> < </div>
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
	#navWrap {
		display: block;
		padding-top: 25px;
	}
	#navBack {
		color: #71ccd7;
		top: 50%;
		transform: translateY(-50%);
		position: relative;
		left: 15px;
		font-size: 24px;
		cursor: pointer;
		transition: 1s all;
	}
	#navBack:hover {
		font-size: 26px;
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
		height: 50px;
		width: 50px;
		left: 50%;
		margin-top: -40px;
		position: relative;
	}
</style>

<script>
	import ProgressCols from './ProgressCols'
	export default {
		name: "Header",
		components: {
			'ProgressCols' : ProgressCols
		}
	}
</script>