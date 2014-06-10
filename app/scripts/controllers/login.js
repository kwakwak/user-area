'use strict';

angular.module('userAreaApp')
  .controller('LoginCtrl', ['$scope','Sessionservice',
                            function ($scope,Sessionservice) {

    $scope.status = Sessionservice.getUserAuthenticated();

    $scope.good=function(){
        Sessionservice.setUserAuthenticated(true);
        $scope.status = Sessionservice.getUserAuthenticated();
    }

    $scope.bad=function(){
    Sessionservice.setUserAuthenticated(false);
        $scope.status = Sessionservice.getUserAuthenticated();

    }

  }]);
