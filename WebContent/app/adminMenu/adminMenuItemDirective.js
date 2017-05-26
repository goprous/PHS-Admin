"use strict";
angular.module('adminMenuModule').directive('adminMenuItem',function(){
	return{
		
	require: '^adminMenu',
		scope:{
			label:'@',
			route :'@'
		},
		templateUrl: 'adminMenu/adminMenuItemTemplate.html',
		 link: function(scope, el , attr,ctrl){
			 scope.isActive = function(){
				 return el === ctrl.getActiveElement();
			 };
			 el.on('click', function(evt){
				 evt.stopPropagation();
				 evt.preventDefault();
				 scope.$apply(function(){
					 ctrl.setActiveElement(el);
					 ctrl.setRoute(scope.route);
				 });
			 });
			 
		 }
		
	};
});