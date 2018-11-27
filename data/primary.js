angular.module('website',['ngRoute'])
	.config(['$routeProvider',function config($rp) {
		$rp
			.when('/home',{templateUrl:'data/home.html'})
			.when('/links',{templateUrl:'data/links.html',controller:['$scope','data',function linkCtrl($scope,data) {
				data.getInto('data/links.json','links');
				$scope.data=data;
			}]})
			.when('/photoshop',{templateUrl:'data/photoshop.html'})
			.when('/chocolate_bread',{templateUrl:'data/chocolate_bread.html'})
			.when('/10_bday',{templateUrl:'data/10_bday.html',controller:['$scope','data',function bdayCtrl($scope,data) {
				data.getInto('data/10_bday.php','bday');
				$scope.data=data;
			}]})
			.otherwise('/home');
	}])
	.service('data',['$http',function dataService($http) {
		var data={getInto:function getInto(url,prop) {
			console.log(data);
			if (prop in data) {return;}
			$http.get(url)
				.success(function getSuccess(response) {
					data[prop]=response;
					console.log(data);
				});
		}};
		return data;
	}])
	.controller('changelog',['$scope','data',function changelog($scope,data) {
		data.getInto('data/changelog.json','changelog');
		$scope.data=data;
	}]);

angular.bootstrap(document.body,['website']);

/*This is now handled by angularjs's ngRoute in a few when statements...
(function($,document) {
	'use strict';
	function url_decode(str) {
		if (!str) {return '';}
		return decodeURIComponent(str.replace(/\+/g, " "));
	}

	function get_query_params(url) {
		var
			question=location.href.indexOf('?')
			,hash
			,query
			,i
			,piece
			,args={};
		if (question===-1) {return args;}
		if (hash===-1) {hash=void 0;}
		query=location.href
			.slice(location.href.indexOf('?')+1,hash)
			.split('&');
		for (i in query) {
			if (query[i]==='') {continue;}
			piece=query[i].split('=');
			args[url_decode(piece[0])]=url_decode(piece[1]);
		}
		return args;
	}

	function load_page(page) {
		if (page&&(['home','links','photoshop','10_bday'].indexOf(page)!==-1))  {
			$page.load('data/'+page);
		}
		else {
			$page.text('Invalid page.');
		}
	}

	var
		params=get_query_params(location.href)
		,$page=$('#page');

	load_page('page' in params ? params.page : 'home');

	$('#header').on('click','.nav_button',function(e) {
		event.preventDefault();
		var page=$(this).attr('data-page');
		load_page(page);
		history.pushState(null,"","?page="+page);
	});
}(jQuery,document));
*/
