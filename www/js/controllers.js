angular.module('app.controllers', [])


    .controller("AtwaterCtrl", function ($scope, $timeout, $ionicScrollDelegate, Menu) {

        Menu.all().success(function (response) {
            $scope.menu = response.dining_halls.atwater;

            if ($scope.menu.breakfast == null) {
                $scope.bfastEmpty = true;
            }
            if ($scope.menu.lunch == null) {
                $scope.lunchEmpty = true;
            }
            if ($scope.menu.dinner == null) {
                $scope.dinnerEmpty = true;
            }
        });

        $scope.setActive = function (index) {
            $scope.active = index;
            $ionicScrollDelegate.scrollTop(true);
        };

        $scope.isActive = function (type) {
            return type === $scope.active;
        };


        var now = new Date().getHours();

        if (now >= 10 && now < 14) {
            $scope.setActive(1)
        }
        else if (now >= 14 && now <= 20) {
            $scope.setActive(2)
        }
        else {
            $scope.setActive(0)
        }

    })

    .controller("ProctorCtrl", function ($scope, $timeout, $ionicScrollDelegate, Menu) {

        Menu.all().success(function (response) {
            $scope.menu = response.dining_halls.proctor;
            if ($scope.menu.breakfast == null) {
                $scope.bfastEmpty = true;
            }
            if ($scope.menu.lunch == null) {
                $scope.lunchEmpty = true;
            }
            if ($scope.menu.dinner == null) {
                $scope.dinnerEmpty = true;
            }
        });

        $scope.setActive = function (index) {
            $scope.active = index;
            $ionicScrollDelegate.scrollTop(true);
        };

        $scope.isActive = function (type) {
            return type === $scope.active;
        };


        var now = new Date().getHours();

        if (now >= 10 && now < 14) {
            $scope.setActive(1)
        }
        else if (now >= 14 && now <= 20) {
            $scope.setActive(2)
        }
        else {
            $scope.setActive(0)
        }
    })

    .controller("RossCtrl", function ($scope, $timeout, $ionicScrollDelegate, Menu) {


        Menu.all().success(function (response) {
            $scope.menu = response.dining_halls.ross;
            if ($scope.menu.breakfast == null) {
                $scope.bfastEmpty = true;
            }
            if ($scope.menu.lunch == null) {
                $scope.lunchEmpty = true;
            }
            if ($scope.menu.dinner == null) {
                $scope.dinnerEmpty = true;
            }
        }).error(function () {

        });


        $scope.setActive = function (index) {
            $scope.active = index;
            $ionicScrollDelegate.scrollTop(true);
        };

        $scope.isActive = function (type) {
            return type === $scope.active;
        };

        var now = new Date().getHours();

        if (now >= 10 && now < 14) {
            $scope.setActive(1)
        }
        else if (now >= 14 && now <= 20) {
            $scope.setActive(2)
        }
        else {
            $scope.setActive(0)
        }

    })

    .controller("MainCtrl", function ($scope, $ionicModal) {


        $ionicModal.fromTemplateUrl('templates/hours.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });


        $scope.showHours = function () {
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
    });
