angular.module('app', [
    'ionic',

    'app.controllers',
    'app.services'
])

    .run(function ($rootScope, $ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (navigator.splashscreen) {
                navigator.splashscreen.hide();
            }
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            if (navigator.connection) {
                var networkState = navigator.connection.type;
                if (networkState === Connection.UNKNOWN || networkState === Connection.NONE) {
                    navigator.notification.alert("you must be online to view the menu", function () {
                    }, "Warning!", "OK")
                }
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.atwater', {
                url: '/atwater',
                views: {
                    'tab-atwater': {
                        templateUrl: 'templates/atwater.html',
                        controller: 'AtwaterCtrl'
                    }
                }
            })

            .state('tab.proctor', {
                url: '/proctor',
                views: {
                    'tab-proctor': {
                        templateUrl: 'templates/proctor.html',
                        controller: 'ProctorCtrl'
                    }
                }
            })


            .state('tab.ross', {
                url: '/ross',
                views: {
                    'tab-ross': {
                        templateUrl: 'templates/ross.html',
                        controller: 'RossCtrl'
                    }
                }
            })


        $urlRouterProvider.otherwise('/tab/atwater');
    });
