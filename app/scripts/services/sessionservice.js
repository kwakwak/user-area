'use strict';

angular.module('userAreaApp')
  .service('Sessionservice', function () {

        var userIsAuthenticated = false;

        this.setUserAuthenticated = function(value){
            userIsAuthenticated = value;
        };

        this.getUserAuthenticated = function(){
            return userIsAuthenticated;
        };
  });

