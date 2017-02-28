'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('CategoryCtrl', function ($scope, products, category) {
    $scope.category = category;
    $scope.title = $scope.category.title;
    $scope.products = products;
  });
