<template>
	<div class="wrapper">
		<div class="wrapper__background">
			<img src="@/assets/background_1.jpg" class="d-block w-100 wrapper__img" alt="фон">
		</div>
		<SelectionResults />
		<OrderForm class="wrapper__form" />
	</div>
</template>

<script>
	import OrderForm from '@/components/content/OrderForm.vue'
	import SelectionResults from '@/components/content/SelectionResults.vue'
export default {
	name: 'FormSection',
	props: {
		msg: String
	},
	components: {
		OrderForm,
		SelectionResults,
	}
}
</script>

<style scoped lang="scss">
	@import '@/scss/_mixins.scss';
	@import '@/scss/style.scss';
	@import '~bootstrap/dist/css/bootstrap.min.css';

.wrapper{
	width: 100%;
	display: flex;
	height: 1000px;
	background-color: #4ca1fa;
	position: relative;

	&__background{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1;
	}

	&__img{
		z-index: 1;
		width: 100%;
		height: 1000px;
	}

	&__form{
		z-index: 9;
	}
}

</style>
