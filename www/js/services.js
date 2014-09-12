angular.module('app.services', [])

    .factory('Menu', function ($http) {

        return {
            all: function () {
                return $http({
                    url: 'http://middmenuapi.herokuapp.com/',
                    method: 'GET'
                })
            }
        }
    });
