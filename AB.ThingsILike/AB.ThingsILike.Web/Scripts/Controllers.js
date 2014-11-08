var myApp = angular.module('myApp', []);

myApp.controller('HomeController', function ($scope, Data) {

    $scope.data = Data;

});

myApp.controller('ClockController', function ($scope) {

    var updateClock = function () {
        $scope.clock = new Date();
    };

    var timer = setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});