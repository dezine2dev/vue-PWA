<template>
	<div class="listButton" :class="{ disabled: isDisabled }">
		<div @click="toggleSelected" class="plusIcon" :class="{ selected: isSelected }">{{icon}}</div>
		<h1>{{ title }}</h1>
	</div>
</template>

<style scoped>
	h1 {
		padding-left: 40px;
		margin-top: 0px;
		font-size: 1.8em;
	}
	.plusIcon {
		padding-top: 2.7px;
		font-size: 3em;
		color: white;
		text-align: center;
		height: 25px;
		width: 25px;
		background-color: #71CCD7;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		cursor: pointer !important;
		top: 0px;
		left: 0px;
	}
	.plusIcon.selected {
		background-color: #EEFF91;
		color: black;
	}
	.listButton {
		cursor: pointer !important;
		transition: 0.75s;
		opacity: 1;
	}

	.listButton.disabled {
		opacity: 0;
		/*animation: 1s shrink;*/
	}

	@keyframes shrink {
		0% {
			transform: scale(1.0);
		}
		20% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(0.0);
		}
	}

	@media (max-width: 480px){
		#personalityStep .md-card-content h1 {
			font-size: 1.2em;
		}
	}

</style>

<script>
	export default {
		name: 'ListButton',
		props: ['title', 'info', 'selected'],
		mounted(){
			// For Showing Active on Back Navigation
			console.log(this.title);
			if (this.$store.state.ailment.length > 0){
				for (var i = 0; i < this.$store.state.ailment.length; i++) {
					if (this.title == this.$store.state.ailment[i]){
						console.log(this.$store.state.ailment[i]);
						this.loadState();
					}
				}
			}

			if (this.$store.state.effect.feeling.length > 0){
				for (var i = 0; i < this.$store.state.effect.feeling.length; i++) {
					if (this.title == this.$store.state.effect.feeling[i]){
						this.loadState();
					}
				}
			}

			if (this.$store.state.personality.length > 0){
				for (var i = 0; i < this.$store.state.personality.length; i++) {
					if (this.title == this.$store.state.personality[i]){
						this.loadState();
					}
				}
			}	
		},
		data(){
			return {
				isSelected: this.selected,
				isDisabled : false,
				icon: '+'
			} 
		},
		methods: {
			
			toggleSelected(){
			
				if (this.info == "feeling") {

					this.icon == '+' ? this.$store.commit('addFeeling', this.title) : this.$store.commit('removeFeeling', this.title)
					this.isSelected = !this.isSelected;
					this.icon = this.icon == '+' ? '-' : '+';

				} else if (this.info === "ailment") {

					if (this.$store.state.ailment.length < 1) {

						if (this.icon == '+'){
							this.$store.commit('addAilment', this.title) 
						} else { 
							this.$store.commit('removeAilment', this.title)
						}

						this.isSelected = !this.isSelected;
						this.icon = this.icon == '+' ? '-' : '+';
					} else {
						if (this.icon == '-'){
							this.$store.commit('removeAilment', this.title)
							this.isSelected = !this.isSelected;
							this.icon = this.icon == '+' ? '-' : '+';
						}
					}

				} else if (this.info === "personality") {

					if (this.$store.state.personality.length < 3) {

						if (this.icon == '+'){
							this.$store.commit('addPersonality', this.title) 
						} else { 
							this.$store.commit('removePersonality', this.title)
						}

						this.isSelected = !this.isSelected;
						this.icon = this.icon == '+' ? '-' : '+';
					} else {
						if (this.icon == '-'){
							this.$store.commit('removePersonality', this.title)
							this.isSelected = !this.isSelected;
							this.icon = this.icon == '+' ? '-' : '+';
						}
					}

				}
			
			},
			loadState(){
				this.isDisabled = false;
				this.isSelected = true;
				this.icon = "-";
			}
		}
	}
</script>