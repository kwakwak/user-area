'use strict';

angular.module('userAreaApp')
  .service('Sessionservice', function () {

        var user ={
            Authenticated: false,
            pointer: ''
        };

        this.setUser = function(newUser){
            user= newUser;
        };

        this.getUser = function(){
            return user;
        };
  });

