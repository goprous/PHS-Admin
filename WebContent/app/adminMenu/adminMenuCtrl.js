"use strict";

angular.module('adminMenuModule').controller('adminMenuCtrl',['$scope','$rootScope', 
	function($scope, $rootScope){
	$scope.showMenu = true;
		
	this.getActiveElement = function(){
		return $scope.activeElement;
	};
	this.setActiveElement = function(el){
		$scope.activeElement = el;
	};
	this.setRoute = function(route){
		
		$rootScope.$broadcast('admin-menu-item-selected-event',{route:route});
	};
	
	$scope.$on('admin-menu-show', function(evt, data){
		
		$scope.showMenu = data.show;
	});
	
} ]);
