'use strict';

angular.module('userAreaApp')
  .controller('LoginCtrl', ['$scope','Sessionservice','login','$location','dicti',
                            function ($scope,Sessionservice,login,$location,dicti) {
    $scope.dicti = dicti;
    $scope.login = function (credentials){
        login(credentials.email,credentials.password).then(function(res){
            Sessionservice.setUser({
                Authenticated: res.data.success,
                pointer: res.data.pointer
            });

            if (res.data.success){
                $location.path( "/invite" );
            } else {
                $scope.credentials = {};
                $scope.error = true;

            }

        });
    };

  }]);
