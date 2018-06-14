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
				<md-input type="text" v-model="search" @input="searchTable" />
  			</div>
		</md-field>
		<div v-if="searchMatch">
			<div class="wrap">
				<ListButton 
					v-for="(ailment, index) in $store.state.ailments" 
					:key="index" 
					:title="ailment" 
					:info="'ailment'" 
					:selected="false">
				</ListButton>
			</div>
			<router-link v-if="!isDisabled" :to="{ path: '/effects' }">
	      		<button class="stepButton">Next</button>
	    	</router-link>
	    	<button v-else class="stepButton" :class="{ disabled: isDisabled }">Next</button>
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


<script>
	import ListButton from './ListButton'
	import ProgressCols from './ProgressCols'
	
	// // outside of the component:
	// function initialState (){
	//   return {
	// 		ailmentsLib: [
	// 				"Chronic Pain",
	// 				"Migraines",
	// 				"Muscle Spasms",
	// 				"Stress",
	// 				"Vertigo",
	// 				"Nausea"
	// 			],
	// 			searchMatch: true,
	// 	    	search: '',
	// 			ailments: [
	// 				"Chronic Pain",
	// 				"Migraines",
	// 				"Muscle Spasms",
	// 				"Stress",
	// 				"Vertigo",
	// 				"Nausea"
	// 			]
	// 	}
	// }

	export default {
		name: 'Ailments',
		components: {
			ListButton,
			ProgressCols
		},
		methods: {
			searchChange: function(){
				this.$store.state.ailments = this.$store.state.ailmentsLib.filter(ailment => ailment.includes(this.search));
				this.searchMatch = this.$store.state.ailments.length > 0 ? true : false;
			},
			searchTable: function(){
				// Two Tiered Search For Performance Reasons
				// Turn Search Value Into Arr
				
				if (this.search != ''){ 

					let searchArr = this.search.split(''),
						broadResArr = [],
						searchResArr = [];

					console.log(searchArr);

					for (var n = 0; n < this.$store.state.ailmentsLib.length; n++) {
						
						console.log(this.$store.state.ailmentsLib[n].charAt(0));
						console.log(this.search.charAt(0));
						// Letter Match By First Char
						if (this.$store.state.ailmentsLib[n].charAt(0).toUpperCase() == searchArr[0].toUpperCase()){
							console.log("First Char Match");
							broadResArr.push(this.$store.state.ailmentsLib[n]);
						}

					}

					// Letter Match By All Char
					if (broadResArr.length > 0) {
						for (var n = 0; n < broadResArr.length; n++) {
							console.log(n);
							for (var i = 0; i < searchArr.length; i++) {
								console.log(i);
								if (broadResArr[n].charAt(i).toUpperCase() !== searchArr[i].toUpperCase()){
									console.log("no match char: "+i);
									break;
								} else {
									if (searchResArr[searchResArr.length] != broadResArr[n] ) {
										searchResArr.push(broadResArr[n]);
										console.log(searchResArr);
									} else {
										console.log('Duplicate Found - Not Adding');
									}
								}

							}
						}
					}

					this.searchMatch = searchResArr.length > 0 ? true : false;
					this.$store.state.ailments = searchResArr;

				} else {
					console.log('Search Empty');
					// for (var i = 0; i < this.ailmentsLib.length; i++) {
					// 	this.ailments[i] = this.ailmentsLib[i];
					// }
					// this.searchMatch = true; 
					this.resetList();
				}
			},
			resetList: function() {
	            // Fetch the initialState object locally, so we do not have to call the function again
	            let initialData = initialState();
	            // Iterate through the props
	            for (let prop in initialData) {
	                // Reset the prop locally.
	                this[prop] = initialData[prop];
	            }
	        }
		},
		computed: {
		    isDisabled: function ()  {
		        return this.$store.state.ailment.length < 1
		    }
		    // searchMatch: true,
		    // search: ''
		},
		mounted(){
			console.log(this.searchMatch);
			this.$store.commit('toggleNext');
		},
		data: function(){
			return {
				// ailmentsLib: [
				// 	"Chronic Pain",
				// 	"Migraines",
				// 	"Muscle Spasms",
				// 	"Stress",
				// 	"Vertigo",
				// 	"Nausea"
				// ],
				searchMatch: true,
		    	search: '',
				// ailments: [
				// 	"Chronic Pain",
				// 	"Migraines",
				// 	"Muscle Spasms",
				// 	"Stress",
				// 	"Vertigo",
				// 	"Nausea"
				// ]
			}	
		}
	}
</script>


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
		border-bottom: 0px !important;
	}
	textarea {
		width: 100%;
		background-color: #604EA0;
		color: white;
		padding: 40px;
		min-height: 200px;
		border: 10px solid #7e6db1;
	}
	@media (max-width: 480px){
		.wrap h1 {
			font-size: 1.6em;
			padding-left: 75px;
			padding-top: 2px;
			font-size: 3em;
		}
		.stepImg {
			margin-left: -20px;
			margin-top: -20px;
		}
	}
	@media (max-width: 380px){
		.plusIcon {
			height: 20px;
			width: 20px;
			padding-top: 0.2px;
			padding-left: 2px;
			font-size: 2em;
		}
	}
</style>