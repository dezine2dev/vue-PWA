<template>
	<nav>
		<div id="navBack"> < </div>
		<div id="navLogo"></div>
		<!-- <ProgressCols></ProgressCols> -->
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
	}
	#navBack,
	#navLogo {
		background-position: center;
		background-repeat: no-repeat;
	}
	#navLogo {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		position: absolute;
	}
</style>

<script>
	import ProgressCols from './ProgressCols'
	export default {
		name: "Header",
		components: {
			ProgressCols
		}
	}
</script>