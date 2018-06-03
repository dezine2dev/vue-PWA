<template>
	<div id="ailmentStep">
		<ProgressCols></ProgressCols>
		<div class="wrap">
			<div class="stepImg"></div>
			<h1>Ailment</h1>
			<h2>Choose One</h2>
			<p>Don't worry, you can focus on additional ailments by adding to your profiles later.</p>
		</div>
		<md-field>
			<label>Search</label>
			<div class="autocomplete">
				<md-input type="text" v-model="search" @input="searchChange" />
  			</div>
		</md-field>
		<div v-if="searchMatch">
			<div class="wrap">
				<ListButton 
					v-for="(ailment, index) in ailments" 
					:key="index" 
					:title="ailment" 
					:info="'ailment'" 
					:selected="false">
				</ListButton>
			</div>
			<router-link :to="{ path: '/effects' }">
	      		<button class="stepButton">Next</button>
	    	</router-link>
	    </div>
    	<div v-else>
    		<div class="wrap">
				<h3 class="green">Sorry you can't find what you're looking for. Make an ailment suggest here. We'll let you know as soon as we add it to our list.</h3>
			</div>
			<textarea placeholder="Make an ailment suggestion here"></textarea>
			<button class="stepButton">Suggest</button>
		</div>
		
	</div>
</template>

<style>
	#ailmentStep .stepImg {
		background-image: url('../assets/1.png');
	}
	.green {
		color: #14FF00;
	}
	.md-field {
		background-color: #604EA0;
		border: 10px solid #7e6db1;
		color: white;
	}
	.plusIcon {
		float: left !important;
		position: relative !important;
	}
	label {
		padding-left: 40px;
	}
	.autocomplete .md-input {
		padding-left: 40px;
	}
	textarea {
		width: 100%;
		background-color: #604EA0;
		color: white;
		padding: 40px;
		min-height: 200px;
		border: 10px solid #7e6db1;
	}
</style>

<script>
	import ListButton from './ListButton'
	import Autocomplete from './Autocomplete'
	import ProgressCols from './ProgressCols'
	
	export default {
		name: 'Ailments',
		components: {
			ListButton,
			Autocomplete,
			ProgressCols
		},
		methods: {
			searchChange: function(){
				this.ailments = this.ailmentsLib.filter(ailment => ailment.includes(this.search));
				this.searchMatch = this.ailments.length > 0 ? true : false;
			}
		},
		data: function(){
			return {
				ailmentsLib: [
					"Chronic Pain",
					"Migraines",
					"Muscle Spasms",
					"Stress",
					"Vertigo",
					"Nausea"
				],
				search: '',
				searchMatch: true,
				ailments: [
					"Chronic Pain",
					"Migraines",
					"Muscle Spasms",
					"Stress",
					"Vertigo",
					"Nausea"
				]
		}	}
	}
</script>