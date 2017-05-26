"use strict";
angular.module('adminMenuModule').directive('adminMenuGroup',function(){
	return{
	transclude: 'true',	
	require: '^adminMenu',
		scope:{
			label:'@',
			icon:'@'
					},
		templateUrl: 'adminMenu/adminMenuGroupTemplate.html',
		 link: function(scope, el , attr,ctrl){
			 scope.isOpen = false;
			scope.closeMenu = function(){
				 scope.isopen = false;
			 };
			  scope.clicked = function(){
				 
				 scope.isOpen =!scope.isOpen;
			 };
		 }
		
	};
});