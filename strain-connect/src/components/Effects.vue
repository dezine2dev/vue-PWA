<template>
	<div id="effectsStep">
		<ProgressCols></ProgressCols>
		<div class="wrap">
			<div class="stepImg"></div>
			<h1>Effect</h1>
	       	<div class="ratingContainer">
	        	<md-card-header>
		          <div class="md-title">High</div>
		        </md-card-header>
		        <div class="iconWrap">
		        	<Icon @click="setRating(0)" :active="isActive(0)" :type="'star'" :text="'No High'" :index='1'></Icon>
		        	<Icon @click="setRating(1)" :active="isActive(1)" :type="'star'" :text="'2'" :index='2'></Icon>
		        	<Icon @click="setRating(2)" :active="isActive(2)" :type="'star'" :text="'Medium High'" :index='3'></Icon>
		        	<Icon @click="setRating(3)" :active="isActive(3)" :type="'star'" :text="'4'" :index='4'></Icon>
		        	<Icon @click="setRating(4)" :active="isActive(4)" :type="'star'" :text="'Very High'" :index='5'></Icon>
		        </div>
	        </div>

	       	<div v-if="$store.state.step >= 3" class="ratingContainer">
	       		<md-card-header>
		          <div class="md-title">Time</div>
		        </md-card-header>
		        <div class="iconWrap">
		        	<Icon :active="isActive(0)" :type="'sun'" :text="'Day'"></Icon>
		        	<Icon :active="isActive(1)" :type="'moon'" :text="'Night'"></Icon>
		        </div>
	        </div>

	        <div v-show="$store.state.step >= 4" id="feelingContainer" class="ratingContainer">
	        	<md-card-header>
		          <div class="md-title">How do you <span style='font-weight: bold'> want </span> to feel?</div>
		        </md-card-header>
	        	<ListButton v-for="(feeling, index) in feelings" :key="index" :title="feeling" :info="'feeling'"></ListButton>
	        </div>
		</div>

		<router-link v-if="$store.state.effect.feeling.length > 0" :to="{ name: 'Personality' }">
      		<button class="stepButton">Next</button>
    	</router-link>
    	<button v-else class="stepButton disabled">Next</button>
	</div>
</template>

<script>
	import Icon from './Icon'
	import ListButton from './ListButton'
	import ProgressCols from './ProgressCols'
	export default {
		components: {
			ListButton,
			Icon,
			ProgressCols
		},
		mounted(){
			this.$store.commit('setStep', 2);
		},
		data: function(){
			return {
				timeLogged: false,
				highLogged: false,
				feelings: [
					'Active',
					'Aroused',
					'Calm',
					'Creative',
					'Energetic',
					'Focused',
					'Hungry',
					'Relaxed',
					'Sleepy'
				]
			}		
		},
		methods: {
			setRating: function(n){
				console.log("click "+n);
				this.$store.commit('updateRating', n);
				this.$store.commit('setStep', 3);
				this.highLogged = true;
				// this.$state.store.step = 3;
			},
			isActive: function(n){
				this.$store.state.rating > n ? true : false
			}
		}	
	}
</script>

<style scoped>

	.stepImg {
		background-image: url('../assets/2.png');
		background-color: white;
	}

	.md-card-header {
		display: block;
	}

	.md-title {
		padding-left: 0px;
		text-align: left;
	}
	
	.ratingContainer {
		background-color: #604EAD;
		width: calc(150% - 30px);
		padding-left: 25%;
		left: calc(-25% + 15px);
		position: relative;
		padding-top: 15px;
		display: block;
		margin: 10px 0px;
	}

	.ratingContainer .iconWrap {
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
	}

	#feelingContainer {
		display: block;
	}

	.listButton {
		flex-wrap: wrap;
		width: 30%;
		position: relative;
		display: inline-block;
	}

	@media (max-width: 480px){
		.ratingContainer {
			max-width: calc(136% - 30px);
		}
	}

</style>