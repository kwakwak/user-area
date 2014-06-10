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
      .when('/', {
        redirectTo: '/login'
      })
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
        redirectTo: '/'
      });
    }).run(['$rootScope','Sessionservice',function($rootScope,Sessionservice){
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            console.log(Sessionservice.getUserAuthenticated());
        });

    }]);
