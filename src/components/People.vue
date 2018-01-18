<template>
	<div id="People">
		<div id="People_box">
			<div id="People_name">
				<span class="cn_name">{{People.name}}</span>
				<span class="en_name">{{People.name_en}}</span>
			</div>
			<div id="People_message">
				<div class="img">
					<img v-bind:src="People.avatars.small" v-bind:alt="People.name" />
				</div>
				<div class="msg">
					<p class="sex">性别:{{People.gender}}</p>
					<p class="constellation">星座:{{People.constellation}}</p>
					<p class="birthday">出生日期:{{People.birthday}}</p>
					<p class="job">职业:</p>
					<p class="aka_enname">更多外文名:{{People.aka_en[0]}}</p>
					<p class="family">家庭成员:</p>
					<p>imdb编号:</p>
					<p>官方网站</p>
				</div>
				<div class="summary">
					<p class="people_title">影人简介</p>
					<p class="pc_web" id="pc_web1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;章子怡，1979年2月9日出生于中国北京，11岁进入北京舞蹈学院附中舞蹈科，网上流传的章子怡在青少年时期拍摄的一些舞蹈视频，崭露了她少年时代的舞蹈才华。后来进入中央戏剧学院戏剧系，被张艺谋发掘，于1998年担任电影《我的父亲母亲》的女主角（招娣），此片获得2000年柏林电影节银熊奖。1999年，她又演出台湾导演李安执导的电影《卧虎藏龙》，担任女主角（玉娇龙）与周润发、杨紫琼、郎雄等港台资深影人共同演出，《卧虎藏龙》获得次年美国奥斯卡金像奖最佳外语片奖。随着《尖峰时刻2》、《英雄》等电影在美国的成功，她的人气也迅速提高。2005年2月第77届奥斯卡颁奖典礼邀请她为最佳视觉效果颁奖，使她成为继陈冲后又一位在奥斯卡奖上担任颁奖嘉宾的华人女星。之后，也名列美国时代杂志2005年全球前100大最有影响力名单中的“艺人与艺术家”项目。与巩俐、杨紫琼一起拍摄了斯皮尔伯格监制的《艺伎回忆录》，并因此片获金球奖最佳女主角提名。2009年，章子怡首任制片人，拍摄戏剧电影《非常完美》。</p>
					<p class="pc_web" id="pc_web2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;章子怡与徐静蕾、周迅、赵薇等其他三位中国女演员并称四小花旦。</p>
					<p class="mobile_web" id="mobile_web">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;章子怡，1979年2月9日出生于中国北京，11岁进入北京舞蹈学院附中舞蹈科，网上流传的章子怡在青少年时期拍摄的一些舞蹈视频，崭露了她少年时代的舞蹈才华。</p>
					<p class="more" id="more1" v-on:click="more()">更多</p>
				</div>
				<div class="photo">
					<p class="people_title">影人照片</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="works">
					<p class="people_title">影人作品</p>
					<ul>
						<li v-for="value in People.works" class="film_name">
							<ul>
								<li><div style="height: 172px;width: 115px;"><img v-bind:src="value.subject.images.small" v-bind:alt="value.subject.title" /></div></li>
								<li>{{value.subject.title}}</li>
								<li>豆瓣评分:<meter min="0" max="10" v-bind:value="value.subject.rating.average"></meter>{{value.subject.rating.average}}</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Jquery from '@/assets/js/jquery-3.2.1.min.js'
	export default {
		name: 'People',
		data() {
			return {
				People: {}
			}
		},
		created: function() {
			let vm = this;
			$.ajax({
				type: "get",
				url: "http://api.douban.com/v2/movie/celebrity/" + this.$route.params.id,
				async: true,
				dataType: 'jsonp',
				success: function(data) {
					vm.People = data;
				}
			});
		},
		methods:{
			more(){
				$('#more1').css('display','none');
				$('#pc_web1').css('display','block');
				$('#pc_web2').css('display','block');
				$('#mobile_web').css('display','block');
			}
		}
	}
</script>

<style lang="less">
	@import url("../assets/css/people.less");
</style>