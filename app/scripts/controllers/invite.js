'use strict';

angular.module('userAreaApp')
  .controller('InviteCtrl', ['$scope','Sessionservice','invite','dicti',
        function ($scope,Sessionservice,invite,dicti) {

        $scope.dicti = dicti;
        $scope.invite = function (form){
            invite(Sessionservice.getUser().pointer,form.email).then(function(res){

                console.log(res.data);

                if (res.data.success){
                    $scope.success = true
                    $scope.form ={};
                    $scope.error = false

                } else {
                    $scope.success = false
                    $scope.error = true
                }

            });
        };
  }]);
