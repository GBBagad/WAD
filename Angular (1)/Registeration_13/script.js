var app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.page = "register";
    $scope.user = {};

    // REGISTER
    $scope.register = function(){
        if(!$scope.name || !$scope.pass){
            alert("Fill all fields");
            return;
        }

        $scope.user.name = $scope.name;
        $scope.user.pass = $scope.pass;

        alert("Registered");
        $scope.name = "";
        $scope.pass = "";
        $scope.page = "login";
    };

    // LOGIN
    $scope.login = function(){
        if($scope.name == $scope.user.name && $scope.pass == $scope.user.pass){
            $scope.page = "profile";
        } else {
            alert("Wrong details");
        }
    };

    // LOGOUT
    $scope.logout = function(){
        $scope.name = "";
        $scope.pass = "";
        $scope.page = "login";
    };

});