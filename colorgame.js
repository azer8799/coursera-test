(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.name = "";
    $scope.sayMessage = function(){
    	return"you are healthy"
    };
    $scope.feedme = function(){
    	var str="enjoy your meal today"
    	var res = str.split("",3);
	}

})();