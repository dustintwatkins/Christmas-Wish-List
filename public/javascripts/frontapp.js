var app = window.angular.module('app', [])

app.factory('giftFetch', giftFetch)
app.controller('mainCtrl', mainCtrl)

function giftFetch($http){
	var API_ROOT = 'gift'
	return{
		get:function(){
			return $http
			.get(API_ROOT)
			.then(function (resp) {
				return resp.data
			})
		},
		post: function (formData){
			return $http
			.post(API_ROOT,formData)
			.then(function (resp){
				console.log("Post Worked");
			})
		}
	}
}


var urlArray = [
"https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg",
"https://media2.giphy.com/media/kKo2x2QSWMNfW/giphy.gif",
"https://media0.giphy.com/media/6gT5hWNOZxkVq/200w.webp#4-grid1",
"https://media.makeameme.org/created/buys-girlfriend-christmas.jpg",
"http://i39.tinypic.com/122p94g.jpg",
"https://i.imgflip.com/vfvzv.jp"
];


function mainCtrl ($scope, giftFetch){
	$scope.gifts = []

	giftFetch.get()
		.then(function (data){
			$scope.gifts = data
		})
		$scope.addGift = function(){
			var url = $scope.Url;	
			var i = Math.floor((Math.random()*5)+0);
			console.log("url: " + url);
			if(typeof url == "undefined"){ url=urlArray[i]};
			if(url == ""){url = urlArray[i];}
			console.log("url: " + url);
			var formData = {Item:$scope.Item,Image:url};
			console.log(formData);
			giftFetch.post(formData);
			$scope.gifts.push(formData);
		};
	$scope.getAll = function() {
		return $http.get('/comments').success(function(data){
		angular.copy(data, $scope.comments);
		});
	};
	$scope.getAll();
	$scope.delete = function(gift) {
		console.log("entered delete");
		$http.delete('/comments/' + gift._id )
			.success(function(data){
				console.log("delete worked");
	$scope.getAll();
		});
	};
}
/*
var urlArray[
"https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg",
"https://media2.giphy.com/media/kKo2x2QSWMNfW/giphy.gif",
"https://media0.giphy.com/media/6gT5hWNOZxkVq/200w.webp#4-grid1",
"https://media.makeameme.org/created/buys-girlfriend-christmas.jpg",
"http://i39.tinypic.com/122p94g.jpg",
"https://i.imgflip.com/vfvzv.jp"
];*/
