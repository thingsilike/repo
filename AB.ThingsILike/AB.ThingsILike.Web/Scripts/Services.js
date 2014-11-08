
myApp.factory('Data', function ($http) {

    $http.get('/api/Lists').success(function (dataReturned) {

        alert(dataReturned);

    });

    return {
        message: "Hello from angular service",
        sometext: "Hello"
    };
});