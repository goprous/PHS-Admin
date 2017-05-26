"use strict";

angular.module('adminMenuModule').directive('adminMenu', function(){
	return {
		 transclude:'true',
		 scope:{
			 
		 },
		 controller:'adminMenuCtrl',
		 templateUrl: 'adminMenu/adminMenuTemplate.html',
		 link: function(scope, el , attr){
			 
		 }
	};
});