angular.module('MainApp', [])
    .controller("mainController", ['$scope', '$http', function ($scope, $http) {
        $scope.test = {};

        $http.get('/api')
            .then(
                function success(data) {
                    $scope.test = data.data;
                    console.log(data.data);
                })
    }]);

