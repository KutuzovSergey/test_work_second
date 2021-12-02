<template>
	<div class="results">
		<div class="results__wrapper" v-if="!$store.state.orderModul.flights">
			<div class="results__title">
				<span>Результат поиска</span>
			</div>
			<Flights />
			<button class="results__button btn" v-if="!$store.state.orderModul.showButton" @click="showMore">Показать ещё/Воспользоваться фильтром подбора</button>
		</div>
	</div>
</template>

<script>
	import Flights from '@/components/content/Flights.vue'

export default {
	name: 'SelectionResults',
	components: {
		Flights,
	},
	props: {
	},
	data(){
		return {
		}
	},
	computed: {
	},
	methods:{
		showMore: function () {
			this.$router.push('/ticket_filter');
		}
	},
}
</script>

<style scoped lang="scss">
	@import '@/scss/_mixins.scss';
	@import '@/scss/style.scss';

	.results{
		z-index: 9;
		width: 55%;
		display: flex;

		&__title{
			width: 100%;
			height: 40px;
			display: flex;
		}

		&__title>span{
			margin: auto;
			@include textBlock(34px, 12px, hsla(0,0%,100%,.7), normal, 700);
		}

		&__wrapper{
			width: 744px;
			height: 544px;
			margin: 100px auto;
			padding: 36px 0 0 0;
			display: flex;
			flex-direction: column;
		}

		&__button{
			border: none;
			margin: 0 auto;
			@include block(572px, 46px, 0, 6px, #ffa500);
			@include textBlock(16px, 0, #FFFFFF, normal, normal);
		}
	}

</style>
