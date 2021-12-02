<template>
	<div class="filter container">
		<div class="row filter__heder">
			<div class="col filter__item">
				<span>вылет</span>
				<div class="filter__arrow" @click="filtering($event, 'departure')"></div>
			</div>
			<div class="col filter__item">
				<span>прилёт</span>
				<div class="filter__arrow" @click="filtering($event, 'arrival')"></div>
			</div>
			<div class="col filter__item">
				<span>перевозчик</span>
				<div class="filter__arrow" @click="filtering($event, 'carrier')"></div>
			</div>
			<div class="col filter__item">
				<span>рейс</span>
				<div class="filter__arrow" @click="filtering($event, 'flight')"></div>
			</div>
			<div class="col filter__item">
				<span>в пути</span>
				<div class="filter__arrow" @click="filtering($event, 'on_the_way')"></div>
			</div>
			<div class="col filter__item filter__heder-item_border">
				<span>цена</span>
				<div class="filter__arrow" @click="filtering($event, 'price')"></div>
			</div>
		</div>
		<div class="row filter__cells" v-for="(item, key) in ticketList" :key="key">
			<div class="col filter__item">
				<span class="filter__text">{{item.departure}}</span>
			</div>
			<div class="col filter__item">
				<span class="filter__text">{{item.arrival}}</span>
			</div>
			<div class="col filter__item">
				<span class="filter__text">{{item.carrier}}</span>
			</div>
			<div class="col filter__item">
				<span class="filter__text">{{item.flight}}</span>
			</div>
			<div class="col filter__item">
				<span class="filter__text">{{item.on_the_way}}</span>
			</div>
			<div class="col filter__item filter__heder-item_border">
				<span class="filter__text">{{item.price}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

export default {
	name: 'FilterSection',
	props: {
		msg: String
	},
	data(){
		return {
			ticketList: [],
		}
	},
	computed: {
		...mapGetters(['GET_ALL_RAILS'])
	},
	methods:{
		filtering: function (event, value) {
			const elem = event.target;
			const rrow_active = document.querySelectorAll('.filter__arrow');
			let ticket_list = this.ticketList;

			if (!elem.classList.contains('filter__arrow-active')) {

				for (var i = 0; i < rrow_active.length; i++) {
					rrow_active[i].classList.remove('filter__arrow-active');
				}

				elem.classList.add('filter__arrow-active');

				if (value == 'departure') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.departure.replace(/[^\d]/g, '')) > 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.departure.replace(/[^\d]/g, '')) == 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.departure.replace(/[^\d]/g, '')) < 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'arrival') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) > 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) == 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) < 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'carrier') {
						ticket_list.sort((a, b) => {
						if (a.carrier.toLowerCase() > b.carrier.toLowerCase()) {return 1}
						if (a.carrier.toLowerCase() < b.carrier.toLowerCase()) {return -1}
					});
				} else if (value == 'flight') {
					ticket_list.sort((a, b) => {
						if (a.flight.toLowerCase() > b.flight.toLowerCase()) {return 1}
						if (a.flight.toLowerCase() < b.flight.toLowerCase()) {return -1}
					});
				} else if (value == 'on_the_way') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) > 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) == 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) < 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'price') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.price.replace(/[^\d]/g, '')) > 
							parseInt(b.price.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.price.replace(/[^\d]/g, '')) == 
							parseInt(b.price.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.price.replace(/[^\d]/g, '')) < 
							parseInt(b.price.replace(/[^\d]/g, ''))) return -1;
					});
				}
			} else if (elem.classList.contains('filter__arrow-active')) {

				elem.classList.remove('filter__arrow-active');

				if (value == 'departure') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.departure.replace(/[^\d]/g, '')) < 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.departure.replace(/[^\d]/g, '')) == 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.departure.replace(/[^\d]/g, '')) > 
							parseInt(b.departure.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'arrival') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) < 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) == 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.arrival.replace(/[^\d]/g, '')) > 
							parseInt(b.arrival.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'carrier') {
						ticket_list.sort((a, b) => {
						if (a.carrier.toLowerCase() < b.carrier.toLowerCase()) {return 1}
						if (a.carrier.toLowerCase() > b.carrier.toLowerCase()) {return -1}
					});
				} else if (value == 'flight') {
					ticket_list.sort((a, b) => {
						if (a.flight.toLowerCase() < b.flight.toLowerCase()) {return 1}
						if (a.flight.toLowerCase() > b.flight.toLowerCase()) {return -1}
					});
				} else if (value == 'on_the_way') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) < 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) == 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.on_the_way.replace(/[^\d]/g, '')) > 
							parseInt(b.on_the_way.replace(/[^\d]/g, ''))) return -1;
					});
				} else if (value == 'price') {
					ticket_list.sort((a, b) => {
						if (parseInt(a.price.replace(/[^\d]/g, '')) < 
							parseInt(b.price.replace(/[^\d]/g, ''))) return 1;
						if (parseInt(a.price.replace(/[^\d]/g, '')) == 
							parseInt(b.price.replace(/[^\d]/g, ''))) return 0;
						if (parseInt(a.price.replace(/[^\d]/g, '')) > 
							parseInt(b.price.replace(/[^\d]/g, ''))) return -1;
					});
				}
			}

		},
	},
	mounted(){
		this.ticketList = this.GET_ALL_RAILS;
	},
}
</script>

<style scoped lang="scss">
	@import '~bootstrap/dist/css/bootstrap.min.css';
	@import '@/scss/_mixins.scss';
	@import '@/scss/style.scss';

	.filter{
		padding-top: 60px;

		&__heder{
			@include block(100%, 42px, 0, 0, #e6e6e6);
			border: 2px solid #000000;
		}

		&__item{
			display: flex;
			position: relative;
			border-right: 2px solid #000000; 
		}

		&__heder-item_border{
			border: none;
		}

		&__item>span{
			margin: auto;
			@include textBlock(1.2rem, 20px, #202020, normal, normal);
		}

		&__arrow {
			display: inline-flex;
			width: 14px;
			height: 14px;
			cursor: pointer;
			position: absolute;
			right: 8px;
			top: 15px;
			border-top: 5px solid #202020;
			border-right: 5px solid #202020;
			transform: rotate(315deg);
		}

		&__arrow-active {
			transform: rotate(135deg);
		}

		&__cells{
			margin-top: 6px;
			@include block(100%, 32px, 0, 0, #ffffff);
			border: 1px solid #000000;
		}
		&__text{
			font-size: 0.9rem!important;
		}
	}

</style>
