<template>
	<div id="app">
		<header>
			<a href="/#/">电影</a>
		</header>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
	@import url("assets/css/header.less");
	@import url("assets/css/all.less");
</style>