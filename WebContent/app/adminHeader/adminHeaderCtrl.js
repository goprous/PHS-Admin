"use strict";

angular.module('adminHeaderModule').controller('adminHeaderCtrl',['$scope', '$window', '$timeout','$rootScope',
	function($scope, $window, $timeout, $rootScope){
	
	$scope.isMenuButtonVisible = true;
	$scope.isMenuVisible = true;
	
		$scope.$on('admin-menu-item-selected-event', function(evt,data){
			$scope.routeString = data.route;
			checkWidth();
			broadcastMenuState();
		});
	
	$($window).on("resize.adminHeader",function(){
		$scope.$apply(function () {
            checkWidth();
            broadcastMenuState();
        });
    });
    $scope.$on("$destroy", function () {
        $($window).off("resize.adminHeader"); // remove the handler added earlier
    });

    var checkWidth = function () {
        var width = Math.max($($window).width(), $window.innerWidth);
        $scope.isMenuVisible = (width >= 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    };
    
    $scope.menuButtonClicked = function(){
    	$scope.isMenuVisible = !$scope.isMenuVisible;
    	broadcastMenuState();
    	//$scope.$apply();
    };
    var broadcastMenuState = function(){
    	
    	$rootScope.$broadcast('admin-menu-show', {
    		show : $scope.isMenuVisible
    	});
    };

    $timeout(function () {
        checkWidth();
    }, 0);

	
} ]);