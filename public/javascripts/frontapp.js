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

function mainCtrl ($scope, giftFetch){
	$scope.gifts = []

	giftFetch.get()
		.then(function (data){
			$scope.gifts = data
		})
		$scope.addGift = function(){
			var url = $scope.Url;	
			console.log("url: " + url);
			if(typeof url == "undefined"){ url ="https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg"} 
			if(url == ""){url ="https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg"}
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
