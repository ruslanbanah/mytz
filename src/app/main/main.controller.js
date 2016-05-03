/**
 * Created by ruslanbanah on 4/26/16.
 */
(function() {
  'use strict';

  angular
    .module('tz') 
    .controller('TimeZoneController', function($scope, _, timeZone) {
      $scope.timeZoneList = [];
      $scope.countries  = [];
      $scope.timeZoneList = timeZone.getTimeZone();
    });
})();
