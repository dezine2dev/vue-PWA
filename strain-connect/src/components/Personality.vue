<template>
	<div id="personalityStep">
		<ProgressCols></ProgressCols>
		<div class="wrap">
			<div class="stepImg"></div>
			<h1>Personality</h1>
			<h2>Choose One</h2>
			<p>Choose up to 3 characteristics that describe you best. Be honest about WHO you are, not who you WANT to be.</p>
	        <md-card-header>
	          <div class="md-title">Who Are You?</div>
	        </md-card-header>
		</div>

	    <md-card-content>
          	<ListButton v-for="(trait, index) in traits" :title="trait" :key="index" :info="'personality'" :selected="false"></ListButton>
        </md-card-content>

    	<button v-if="$store.state.personality.length < 3" class="stepButton disabled">Next</button>
		<router-link v-else :to="{ name: 'Complete' }">
      		<button class="stepButton">Next</button>
    	</router-link>    	
	</div>
</template>

<style>
	#personalityStep .stepImg {
		background-image: url('../assets/3.png');
	}

	#personalityStep > * {
		color: white;
	}
	#personalityStep .plusIcon {
		position: relative !important;
		float: left !important;
	}
	#personalityStep .md-card-content h1 {
		margin-right: 25px;
	}
	#personalityStep .md-card-content {
		display: flex;
		/*flex-direction: column;*/
		flex-wrap: wrap;
		background-color: #604EAD;
	}
	#personalityStep .listButton {
		width: calc(100% / 3);
	}
	.md-card-content {
		color: white;
	}
	@media (max-width: 480px){
		#personalityStep .md-card-content h1 {
			padding-left: 30px;
		}
	}
</style>

<script>
	// let b = document.querySelectorAll('.listButton');

	// for (var i = b.length - 1; i >= 0; i--) {
	// 	b[i].addEventListener("click", function(){
	// 		if () {}
	// 	});
	// }
</script>

<script>
	import ListButton from './ListButton'
	import ProgressCols from './ProgressCols'

	export default {
		components: {
			ListButton,
			ProgressCols
		},
		mounted(){
			this.$store.state.step = 5;
		},
		data: function(){
			return {
				traits: [
					"Active",
					"Addictive",
					"Aggressive",
					"Angry",
					"Anxious",
					"Assertive",
					"Calm",
					"Confident",
					"Energetic",
					"Excitable",
					"Insecure",
					"Lazy",
					"Low Energy",
					"Moody",
					"Paranoid",
					"Passionate",
					"Sensitive",
					"Sociable",
					"Stressed",
					"Talkative",
					"Timid"
				]
		}	}
	}
</script>