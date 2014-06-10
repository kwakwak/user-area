'use strict';

angular
  .module('userAreaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        requireLogin: false
      })
      .when('/invite', {
        templateUrl: 'views/invite.html',
        controller: 'InviteCtrl',
        requireLogin: true
      })
      .otherwise({
        redirectTo: '/login'
      });
    }).run(['$rootScope','Sessionservice','$location',function($rootScope,Sessionservice,$location){

        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if(next.requireLogin) {
                if (!Sessionservice.getUser().Authenticated){
                    console.log ("You are not Authenticated!");
                    $location.path( "/login" );
                }
            }
        });

    }]);
