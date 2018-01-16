<template>
	<div id="Movie">
		<div id="box">
			<div id="title">
				<span class="large">{{Movie.title}}</span>
				<span class="middle">{{Movie.original_title}}</span>
				<span class="middle" style="font-weight: bolder; font-size: 24px;">({{Movie.year}})</span>
			</div>
			<div class="image">
				<img v-bind:src="Movie.images.large" v-bind:alt="Movie.title" />
			</div>
			<ul class="directors">
				<li class="tag">导演：</li>
				<li v-for="value in Movie.directors">{{value.name}}</li>
			</ul>
			<ul class="autor">
				<li class="tag">主演：</li>
				<li v-for="value in Movie.casts">{{value.name}}</li>
			</ul>
			<ul class="type">
				<li class="tag">类型：</li>
				<li v-for="value in Movie.genres">{{value}}</li>
			</ul>
			<p class="rating">豆瓣评分:<meter min="0" max="10" v-bind:value="Movie.rating.average"></meter>{{Movie.rating.average}}</p>
			<ul class="wanna">
				<li class="left">想看({{Movie.wish_count}})</li>
				<li class="right">看过({{Movie.reviews_count}})</li>
			</ul>
			<h3>{{Movie.title}}的剧情介绍</h3>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{Movie.summary}}</p>
		</div>
	</div>
</template>

<script>
	import Jquery from '@/assets/js/jquery-3.2.1.min.js'
	export default {
		name: 'Movie',
		data() {
			return {
				Movie: {},
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://api.douban.com/v2/movie/subject/" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				success: function(data) {
					vm.Movie = data;
				}
			});
		}
	}
</script>

<style lang="less">
	@import url("../assets/css/movie.less");
</style>