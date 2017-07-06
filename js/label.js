(function () {
  var app = angular.module('copyExample', [])
  app.controller('ExampleController', ['$scope', function ($scope) {
    console.log('inCtrl')
    console.log(angular.version.full)
    $scope.master = {};
    $scope.alert = function(){
      window.alert(arguments[0])
      console.log(typeof arguments[0])
    }
    $scope.reset = function () {
      // Example with 1 argument
      $scope.user = angular.copy($scope.master);
    };

    $scope.update = function (user) {
      // Example with 2 arguments
      angular.copy(user, $scope.master);
    };

    $scope.reset();
  }]);
})()