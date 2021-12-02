<template>
	<div class="row flights">
		<div class="mb-3 col flights__block">
			<table cellpadding="0" cellspacing="0" class="flights__table">
				<tr class="flights__tr-">
					<td class="flights__td flights__td-heder">вылет</td>
					<td class="flights__td flights__td-heder">прилёт</td>
					<td class="flights__td flights__td-heder">перевозчик</td>
					<td class="flights__td flights__td-heder">рейс</td>
					<td class="flights__td flights__td-heder">в пути</td>
					<td class="flights__td flights__td-heder">цена</td>
				</tr>
				<tr class="flights__tr" v-for="(item, key) in incompleteList" :key="key">
					<td class="flights__td flights__td-result">{{item.departure}}</td>
					<td class="flights__td flights__td-result">{{item.arrival}}</td>
					<td class="flights__td flights__td-result">{{item.carrier}}</td>
					<td class="flights__td flights__td-result">{{item.flight}}</td>
					<td class="flights__td flights__td-result">{{item.on_the_way}}</td>
					<td class="flights__td flights__td-result">{{item.price}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Flights',
	components: {
	},
	props: {
	},
	data(){
		return {
			incompleteList: [],
		}
	},
	computed: {
		...mapGetters(['GET_ALL_RAILS'])
	},
	watch: {
		// somevar: function () {
		// 	this.dataProcessing(this.GET_ALL_RAILS);
		// }
	},
	mounted(){
		this.dataProcessing(this.GET_ALL_RAILS);
	},
	methods:{
		...mapActions(['SET_SHOW_BUTTON']),
		dataProcessing: function (data) {

			if (data.length > 4) {
				this.SET_SHOW_BUTTON(false);
			}
			this.incompleteList = data.slice(0, 4);

		},
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';

.flights{
	width: 100%;

	&__block{
		width: 100%;
		height: 370px;
	}

	&__table{
		@include block(100%, auto, 0, 0, #ffffff);
		margin-top: 15px; 
	}

	&__td{
		width: 16%;
		height: 50px;
		padding: 0 3px;
		text-align: center;
		border-top: 1px solid #dfdfdf;;
		border-right: 1px solid #dfdfdf;
		@include textBlock(0.9rem, 12px, #202020, normal, normal);
	}
	&__td-heder{
		text-transform: uppercase;
	}
	&__td-result{
		font-size: 0.7rem;
		background-color: #cccccc;
	}
}
</style>
