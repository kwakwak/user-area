'use strict';

angular.module('userAreaApp')
  .factory('login', ['proxy','$http',function (proxy,$http) {
    return function (email,password) {
        var loginObj =
        {
            'server' : 'cloud'                  , // server
            'method' : 'POST'                   , // method
            'did'    : 1                        , //
            'a'      : 'l'                      , // action
            'l'      : 'en-US'                  , // language
            'u'      : email                    , // email
            'p'      : password                   // Password
        }

        return $http.get(proxy,{params: loginObj});

      }
  }]);
