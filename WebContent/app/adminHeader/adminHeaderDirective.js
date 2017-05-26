"use strict";

angular.module('adminHeaderModule').directive('adminHeaderDirective',function(){
	
	return{
		transclude: 'true',
		scope:{
			title:'@',
			iconFile:'@'
		},
		controller:'adminHeaderCtrl',
		templateUrl:'adminHeader/adminHeaderTemplate.html'
		
	}
});