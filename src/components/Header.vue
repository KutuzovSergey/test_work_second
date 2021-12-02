<template>
	<div class="header container-fluid">
		<div class="header__logo"></div>
		<div id="nav" class="header__nav">
			<router-link to="/" class="header__nav-item btn">Home</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		msg: String
	}
}
</script>

<style scoped lang="scss">
	@import '~bootstrap/dist/css/bootstrap.min.css';
	@import '@/scss/_mixins.scss';
	@import '@/scss/style.scss';

	.header{
		display: flex;
		box-shadow: 1px 17px 12px -13px rgba(0,0,0,0.65);
		-webkit-box-shadow: 1px 17px 12px -13px rgba(0,0,0,0.65);
		-moz-box-shadow: 1px 17px 12px -13px rgba(0,0,0,0.65);

		&__logo{
			width: 50%;
		}
		&__nav{
			display: flex;
			height: 70px;
			width: 50%;
			background-color: #FFFEFB;
		}

		&__nav-item{
			@include block(96px, 40px, 12px, 3px, rgba(0, 55, 151, 0.9));
			@include textBlock(1.2rem, 12px, #ffffff, normal, normal);
			margin: auto;
			text-align: center;
		}

		&__nav-item:hover{
			background: linear-gradient(to right, rgba(0, 55, 151, 0.9) 0%, #33ccff 100%);
		}
	}

</style>
