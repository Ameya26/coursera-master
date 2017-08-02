(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Ameya";
$scope.sayHello = function (){
  return "Hi course era"
};
  });
})();
