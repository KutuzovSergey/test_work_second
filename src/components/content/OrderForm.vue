<template>
	<div class="form">
		<form class="form__wrapper" @submit.prevent="checkForm">
			<div class="form__title">
				<span>Поиск авиабилетов</span>
			</div>
			<div class="row">
				<div class="mb-3 col form__block">
					<label for="whereFrom" class="form__description form-label" >Откуда</label>
					<input 
						type="text" 
						name="whereFrom"
						placeholder="Откуда"
						@focus="unlockForm($event)"  
						class="form__field form-control"
						:class="$v.getSearchData.from.$dirty &&
						!$v.getSearchData.from.required ? 'form__field-error' : '' " 
						v-model.trim="getSearchData.from" />
					<FillingError
						v-if="$v.getSearchData.from.$dirty && !$v.getSearchData.from.required"
						:error_text="error_text.departure_city"
						class="form__error" />
				</div>
				<div class="mb-3 col form__block">
					<label for="whereFly" class="form__description form-label">Куда</label>
					<input 
						type="text" 
						name="whereFly"
						placeholder="Куда"
						@focus="unlockForm($event)" 
						class="form__field form-control"
						:class="$v.getSearchData.to.$dirty &&
						!$v.getSearchData.to.required ? 'form__field-error' : '' " 
						v-model.trim="getSearchData.to" />
					<FillingError 
						v-if="$v.getSearchData.to.$dirty && !$v.getSearchData.to.required"
						:error_text="error_text.city_of_arrival"
						class="form__error" />
				</div>
			</div>
			<div class="row">
				<div class="mb-3 col form__block">
					<label for="whenFly" class="form__description form-label" >Когда</label>
					<input 
						type="date" 
						name="whenFly" 
						placeholder="Когда"
						@focus="unlockForm($event)"  
						class="form__field form-control form__when"
						:class="$v.getSearchData.date.$dirty &&
						!$v.getSearchData.date.required ? 'form__field-error' : '' "  
						v-model="getSearchData.date"/>
					<FillingError
						v-if="$v.getSearchData.date.$dirty && !$v.getSearchData.date.required" 
						:error_text="error_text.specify_date"
						class="form__error" />
				</div>
<!-- 				<div class="mb-3 col form__block">
					<label for="backTo" class="form__description form-label" >Обратно</label>
					<input 
						type="date" 
						name="backTo" 
						placeholder="Обратно"
						@focus="unlockForm($event)"  
						class="form__field form-control" 
						v-model="getSearchData.back_to" />
				</div> -->
				<div class="mb-3 col">
					<label for="type" class="form__description form-label" >Класс</label>
					<select 
						name="type"
						@focus="unlockForm($event)"  
						class="form__field form-select form__select" 
						v-model="getSearchData.type" >
							<option 
								v-for="(item, index) in place_levels" 
								:key="index" 
								:value="item.value"
								class="form__option">{{item.label}}</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="mb-3 col">
					<label for="currency" class="form__description form-label" >Валюта оплаты</label>
					<select 
						name="currency"
						@focus="unlockForm($event)"  
						class="form__field form-select form__select" 
						v-model="getSearchData.currency" >
							<option 
								v-for="(item, index) in currencies" 
								:key="index" 
								:value="item.value"
								class="form__option">{{item.label}}</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="mb-3 col">
					<label for="adult" class="form__description form-label" >Взрослые</label>
					<input 
						type="text" 
						name="adult" 
						placeholder="1"
						@focus="unlockForm($event)"  
						class="form__field form-control" 
						v-model.trim="getSearchData.adult" />
				</div>
				<div class="mb-3 col">
					<label for="child" class="form__description form-label" >Дети</label>
					<input 
						type="text" 
						name="child" 
						placeholder="0"
						@focus="unlockForm($event)"  
						class="form__field form-control" 
						v-model.trim="getSearchData.child" />
				</div>
				<div class="mb-3 col">
					<label for="infant" class="form__description form-label" >Младенцы</label>
					<input 
						type="text" 
						name="infant" 
						placeholder="0"
						@focus="unlockForm($event)"  
						class="form__field form-control" 
						v-model.trim="getSearchData.infant" />
				</div>
			</div>
			<button type="submit" class="form__button form__button-disable btn" :disabled="!disable">Подобрать</button>
		</form>
	</div>
</template>

<script>
import FillingError from '@/components/serviceComponents/FillingError.vue'
 import { mapGetters, mapActions } from 'vuex'
 import { validationMixin } from 'vuelidate'
 import { required } from 'vuelidate/lib/validators'

export default {
	name: 'OrderForm',
	components: {
		FillingError,
	},
	props: {
	},
	mixins: [validationMixin],
	data(){
		return {
			getSearchData: {
				from: '',
				to: '',
				date: '',
				type: 'Economy',
				currency: 'USD',
				adult: 1,
				child: 0,
				infant: 0,
			},
			place_levels: [
					{
						label: 'Эконом',
						value: 'Economy',
					},
					{
						label: 'Премиум',
						value: 'Premium',
					},
					{
						label: 'Бизнес',
						value: 'Business',
					},
					{
						label: 'Первый',
						value: 'first',
					},
				],
			currencies: [
				{
					label: 'Доллары',
					value: 'USD',
				},
				{
					label: 'Рубли',
					value: 'RUR',
				},
				{
					label: 'Евро',
					value: 'Euro',
				}
			],
			disable: false,
			error_text: {
				departure_city: 'Укажите город отправления',
				city_of_arrival: 'Укажите город прибытия',
				specify_date: 'Укажите дату',
			},
		}
	},
	validations: {
		getSearchData: {
			from: { required },
			to: { required },
			date: { required },
		}
	},
	computed: {
		...mapGetters(['GET_TODAY_DATE'])
	},
	created(){
		// this.getSearchData.date = this.GET_TODAY_DATE;
		//document.querySelector('input.form__when').valueAsDate = new Date();
	},
	methods:{
		...mapActions(['SET_ALL_RAILS']),
		unlockForm: function () {
			const button_picked = document.querySelector('button.form__button');
			button_picked.classList.remove('form__button-disable');
			this.disable = true;
		},
		checkForm: function () {

			if (this.$v.$invalid) {
				this.$v.getSearchData.$touch();
			}

			let validation_result = this.$v.getSearchData.from.required && this.$v.getSearchData.to.required && this.$v.getSearchData.date.required;

			if (validation_result) {

				let old_array = this.getSearchData;
				let new_array = {};

				for (let key in old_array) {
					new_array[key] = old_array[key];
				}
				
				this.getData(new_array);

				this.getSearchData.from = '';
				this.getSearchData.to = '';
				this.getSearchData.date = '';
				this.getSearchData.currency = 'USD';
				this.getSearchData.type = 'Economy';
				this.getSearchData.adult = 1;
				this.getSearchData.child = 0;
				this.getSearchData.infant = 0;
				this.$v.getSearchData.$reset();
			}
		},
		getData: function (form_data) {
			this.SET_ALL_RAILS(form_data);
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';

	.form{
		width: 40%;
		height: 1000px;
		z-index: 9;
		display: flex;

		&__wrapper{
			z-index: 9;
			margin: 100px auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			@include block(644px, 544px, 36px, 6px, rgba(0, 55, 151, 0.4));
			box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 15px 6px 10px rgba(0, 0, 0, 0.02);
		}

		&__title{
			width: 100%;
			height: 40px;
			display: flex;
		}

		&__title>span{
			margin: auto;
			@include textBlock(34px, 12px, hsla(0,0%,100%,.7), normal, 700);
		}

		&__block{
			position: relative;
		}

		&__icon{
			top: 39px;
			right: 22px;
			color: #42aaff;
			position: absolute;
			cursor: pointer;
		}

		&__button{
			width: 100%;
			height: 46px;
			border-radius: 6px;
			line-height: 15px;
			border: none;
			background-color: #ffa500;
			@include textBlock(16px, 15px, #FFFFFF, normal, normal);
		}

		&__button-disable{
			color: #B4B4B4!important;
			background-color: #ffecc2!important;
		}

		&__error{
			position: absolute;
			top: 62px;
		}

		&__description{
			@include textBlock(14px, 13px, #ffffff, normal, normal);
			letter-spacing: -0.02em;
			position: relative;
		}

		&__field{
			@include block(100%, 40px, 0, 4px, #FFFEFB);
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			padding: 0 16px;
			border: none;
		}

		&__field-error{
			box-shadow: 0px 0px 15px 7px #FF8484;
			-webkit-box-shadow: 0px 0px 15px 7px #FF8484;
			-moz-box-shadow: 0px 0px 15px 7px #FF8484;
			border: 1px solid #FF8484;
		}

		&__checkbox{
			padding: 0 40px;
		}

		&__option{
			@include textBlock(14px, 15px, #B4B4B4, normal, normal);
		}

		&__select{
			@include textBlock(14px, 15px, #B4B4B4, normal, normal);
		}

		&__field::-webkit-input-placeholder {
			@include textBlock(14px, 15px, #B4B4B4, normal, normal);
		}

		&__field:-moz-placeholder {
			@include textBlock(14px, 15px, #B4B4B4, normal, normal);
		}
	}
</style>
