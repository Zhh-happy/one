angular.module("lxAApp").controller("two", function($scope, $http) {
	$http({
		url: "http://www.somenote.cn:1602/list2",
		method: "GET",

	}).success(function(e) {
		//debugger;
		$scope.two = e[0].content;
	})
})