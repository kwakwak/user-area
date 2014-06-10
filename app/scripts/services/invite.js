'use strict';

angular.module('userAreaApp')
  .factory('invite', ['proxy','$http',function (proxy,$http) {
        return function (pointer,email) {
            var inviteObj =
            {
                'server' : 'cloud'                  , // server
                'method' : 'POST'                   , // method
                'did'    : 1                        , //
                'a'      : 'si'                     , // action
                'l'      : 'en-US'                  , // language
                'e'      : email                    , // recipient
                'p'      : pointer                    // pointer
            }

            return $http.get(proxy,{params: inviteObj});

        }
    }]);