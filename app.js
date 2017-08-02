(function() {
  'use strict';

  angular.module('myFirstApp', [])
    .controller('MyFirstController', MyFirstController);

    MyFirstController.$inject = ['$scope', '$filter'];

    function MyFirstController($scope, $filter) {
      $scope.name = "";

      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    }
})();
