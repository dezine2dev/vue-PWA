<template >
	<div class="iconWrap">
		<div @click="toggleActive($event)" class="icon" :class="{ star: hasStar, moon: hasMoon, sun: hasSun, active: isActive  }">
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<style scoped>
	.iconWrap {
		display: inline-block;
		vertical-align: top;
		padding-bottom: 60px;
	}
	.icon {
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		height: 50px;
		width: 50px;
		cursor: pointer;
		transition: 0.5s all;
	}
	.star {
		background-image: url('../assets/star-hover.svg');
	}
	.star.active {
		background-image: url('../assets/star.svg');
	}
	.sun {
		background-image: url('../assets/sun.svg');
	}
	.sun:hover,
	.sun.active {
		background-image: url('../assets/sun-hover.svg');
	}
	.moon {
		background-image: url('../assets/moon.svg');
	}
	.moon:hover,
	.moon.active {
		background-image: url('../assets/moon-hover.svg');
	}
	.active {
		/*background-color: yellow !important;*/
	}
	p {
		font-size: 14px;
		min-height: 14px;
		max-width: 50px;
		text-align: center;
		margin-top: 60px;
		padding-bottom: 60px;
	}
</style>

<script>
	import { mapGetters } from 'vuex' 
	export default {
		props: ['type', 'text', 'active', 'index'],
		data: function(){
			return {
				hasStar: this.type == 'star' ? true : false,
				hasMoon: this.type == 'moon' ? true : false,
				hasSun: this.type == 'sun' ? true : false,
				isActive: this.index > this.$store.state.effect.high ? true : false
			}
		},
		computed: {
			...mapGetters({
				myState: 'getMyState'
			})
		},
		methods: {
			toggleActive: function(event){
				// console.log(event.target);
				// let index = [...event.target.parentElement.parentElement.childNodes].indexOf(event.target.parentElement),
				// 	star = document.querySelectorAll('.star');

				// for (var i = 0; i < index.length; i++) {
				// 	index > i ? star[i].classList.add('active') : star[i].classList.remove('active');
				// }
				this.isActive = !this.isActive
				console.log(this.text);
				if (this.type == "star") {
					// Set High Integer
					switch (this.text){
						case "No High": this.$store.commit('setHigh', 1); break;
						case "2": this.$store.commit('setHigh', 2); break;
						case "Medium High": this.$store.commit('setHigh', 3); break;
						case "4": this.$store.commit('setHigh', 4); break;
						case "Very High": this.$store.commit('setHigh', 5); break;
					}
					// Styling
					if (this.index+1 <= this.$store.state.effect.high) {
						// this.$set('isActive', true);
						this.isActive = true;
						this.$forceUpdate();
					}
					// State step for displaying subcomponents
					this.$store.commit('setStep', 3);
				}

				else if (this.text == "Day" || this.text == "Night") {
					this.$store.commit('setStep', 4);
					if (this.text == "Day"){
						this.$store.commit('setTime', 'Day');
					} else if (this.text == "Night") {
						this.$store.commit('setTime', 'Night');
					}
				}
			}
		}
	}
</script>