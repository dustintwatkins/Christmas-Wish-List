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
			var formData = {Item:$scope.Item,Image:$scope.Url};
			console.log(formData);
			giftFetch.post(formData);
			$scope.gifts.push(formData);
		}
	$scope.delete = function(comment) {
	$http.delete('/comments/' + comment._id )
		.success(function(data){
			console.log("delete worked");
		});
	$scope.getAll();
	};
}
