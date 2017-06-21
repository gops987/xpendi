var application = angular.module('xpendi',['ngRoute']);


application.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl :'partials/login.html',
		controller : 'xpendi_login'
	}).when('/reg',{
		templateUrl :'partials/register.html',
		controller : 'xpendi_login'
	})
})
application.controller('xpendi_login',function($scope){ 

$scope.form = {
	HouseId : '',
	MemberId : '',
	Password : '',
}
$scope.authenticate = function(){
	console.log($scope.form);
}


})
application.factory('Http',function($http){
	var base_url = "../../action-user.php";
	 return {
	 	post :function(form_data){
	 		var request = $http({
	 			method: 'post',
	 			url : base_url,
	 			data : form_data
	 		});
	 		 return  request;
	 	},

	 	send :function(request,callback){
	 		request.then(function(response){
	 			callback(response);
	 		}).error(function(msg){
	 			alert(msg.data);
	 		})
	 	}

	 }
})