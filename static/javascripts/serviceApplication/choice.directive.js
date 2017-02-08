/**
 * Created by shaochenlu on 16/8/17.
 */

'use strict';

angular.module('serviceApplication').
directive('tfChoice', function () {
  return {
    restrict: 'ACE',
    templateUrl: '',
    scope: {},
    controller: ['$scope', function ButtonSelectCtrl() {
      $scope.setTrue = function () {
        
      };
      $scope.setFalse = function () {
        
      }
    }]
  };
});