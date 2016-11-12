angular.module("lxAApp").controller("one", function($scope, $http) {
	$http({
		url: "http://www.somenote.cn:1602/list1",
		method: "GET",

	}).success(function(e) {
		debugger;
		$scope.one = e[0].content;
	})
})