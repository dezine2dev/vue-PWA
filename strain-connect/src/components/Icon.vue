<template >
	<div class="iconWrap">
		<div @click="toggleActive($event)" class="icon" :class="{ star: hasStar, active: isActive  }">
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
	.star:hover {
		transform: scale(1.1);
	}
	.star {
		background-image: url();
		background-color: transparent;
	}
	.sun {
		background-image: url();
	}
	.moon {
		background-image: url();
	}
	.active {
		background-color: yellow !important;
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
	export default {
		props: ['type', 'text', 'active', 'index'],
		data: function(){
			return {
				hasStar: this.type == 'star' ? true : false,
				isActive: this.index > this.$store.state.effect.high ? true : false
			}
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
					switch (this.text){
						case "No High": this.$store.commit('setHigh', 1); break;
						case "2": this.$store.commit('setHigh', 2); break;
						case "Medium High": this.$store.commit('setHigh', 3); break;
						case "4": this.$store.commit('setHigh', 4); break;
						case "Very High": this.$store.commit('setHigh', 5); break;
					}
					console.log(this.$store.state.effect.high);
						console.log(this.index);
					if (this.$store.state.effect.high > this.index) {
						this.$set('isActive', true);
					}
				}
				else if (this.text == "Day") {
					this.$store.commit('setTime', 'Day');
				} else if (this.text == "Night") {
					this.$store.commit('setTime', 'Night');
				}
			}
		}
	}
</script>