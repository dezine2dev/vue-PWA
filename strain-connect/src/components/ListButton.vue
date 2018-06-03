<template>
	<div class="listButton">
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
	}

</style>

<script>
	export default {
		name: 'ListButton',
		props: ['title', 'info', 'selected'],
		data(){
			return {
				isSelected: this.selected,
				icon: '+'
			} 
		},
		methods: {
			toggleSelected(){
				this.isSelected = !this.isSelected
				
				if (this.info == "feeling") {
					this.icon == '+' ? this.$store.commit('addFeeling', this.title) : this.$store.commit('removeFeeling', this.title)
				} else if (this.info === "ailment") {
					this.icon == '+' ? this.$store.commit('addAilment', this.title) : this.$store.commit('removeAilment', this.title)
				} else if (this.info === "personality") {
					this.icon == '+' ? this.$store.commit('addPersonality', this.title) : this.$store.commit('removePersonality', this.title)
				} 

				this.icon = this.icon == '+' ? '-' : '+'
			}
		}
	}
</script>