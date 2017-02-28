'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('ProductCtrl', function ($scope, products, moltin, $timeout) {
    $scope.products = products;
    $scope.addStatus = null;
    $scope.addCart = function(){
    	$scope.addStatus = 'Adding to Cart...';
    	moltin.Cart.Insert(products.id, 1, null, function(){
    		$scope.addStatus = 'Success!';
    		//Inside non angular context
    		$scope.$apply();
    		$timeout(function(){
    			$scope.addStatus = null;
    		}, 1000);
    	});
    }

    console.log($scope.products);
  });
