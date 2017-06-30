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
application.controller('xpendi_login',function($scope,$http){ 

$scope.form = {
	HouseId : '',
	MemberId : '',
	Password : '',
}
$scope.members = [{id: 'choice1'}];
$scope.addNewChoice = function() {
    var newItemNo = $scope.members.length+1;
    $scope.members.push({'id':'choice'+newItemNo});
    console.log($scope.members)
  };
$scope.removeChoice = function() {
    var lastItem = $scope.members.length-1;
    $scope.members.splice(lastItem);
  console.log($scope.members)
  };
$scope.authenticate = function(){
	$http.post('action-user.php',$scope.form).then(function(response){
		console.log("login request successfull",response)
	})

}
$scope.usr_check = function(){

	$scope.v1 = 2;
}
$scope.mvback = function(){

	$scope.v1 = $scope.v1 - 1; 
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