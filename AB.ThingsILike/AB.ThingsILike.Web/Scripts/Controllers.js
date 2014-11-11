

myApp.controller('ListsController', function ($scope, $http) {

    $http.get('/api/Lists').success(function (dataReturned) {
        $scope.lists = dataReturned;
    });

});