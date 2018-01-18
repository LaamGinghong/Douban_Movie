<template>
	<div id="Home">
		<div id="search">
			<input type="text" id="search_box" placeholder="请输入搜索的内容" v-on:keypress.enter="search()" />
			<img src="../assets/搜索.png" v-on:click="search()" />
		</div>
		<div id="title">
			<h3 id="title_msg">{{msg}}</h3>
		</div>
		<img src="../assets/载入中.gif" id="loading" />
		<div id="box">
			<ul>
				<li v-for="value in Movie" class="outer">
					<div class="image">
						<router-link :to="'/Movie/'+value.id"><img v-bind:src="value.images.small" v-bind:alt="value.title" class="image" /></router-link>
					</div>
					<div>
						<h4><router-link :to="'/Movie/'+value.id">{{value.title}}</router-link></h4>
						<ul>
							<li v-for="val in value.casts" class="cast"><router-link :to="'/People/'+val.id">{{val.name}}</router-link></li>
						</ul>
						<ul class="actor">
							<li v-for="val in value.genres" class="type">{{val}}</li>
						</ul>
						<p>{{value.year}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Jquery from '@/assets/js/jquery-3.2.1.min.js'
	export default {
		name: 'Home',
		data() {
			return {
				Movie: [],
				msg: ''
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "https://api.douban.com/v2/movie/in_theaters",
				async: true,
				dataType: 'jsonp',
				success: function(data) {
					vm.Movie = data.subjects;
					let height = Math.ceil(vm.Movie.length / 4) * 480;
					$('#box').css('height', height + 'px');
					vm.msg = '正在热映'
				}
			});
			$(document).ajaxStart(function() {
				$('#loading').show();
				$('#box').hide();
			});
			$(document).ajaxStop(function() {
				$('#loading').hide();
				$('#box').show();
			});
		},
		methods: {
			search() {
				let vm = this;
				let value = document.getElementById('search_box').value;
				if(value == '') {
					alert('请输入搜索内容！')
				} else {
					$.ajax({
						type: "get",
						url: "http://api.douban.com/v2/movie/search?q=" + value,
						async: true,
						dataType: 'jsonp',
						success: function(data) {
							vm.Movie = data.subjects;
							let height = Math.ceil(vm.Movie.length / 4) * 480;
							$('#box').css('height', height + 'px');
							vm.msg = '搜索内容'
						}
					});
					$(document).ajaxStart(function() {
						$('#loading').show();
						$('#box').hide();
					});
					$(document).ajaxStop(function() {
						$('#loading').hide();
						$('#box').show();
					})
				}
			}
		}
	}
</script>

<style lang="less">
	@import url("../assets/css/list.less");
	@import url("../assets/css/search_box.less");
</style>