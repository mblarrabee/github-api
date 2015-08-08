angular.module("github-api").controller("mainCtrl", function($scope, service){

    $scope.getUserData = function(){
    
        service.getUser($scope.searchUser).then(function(response){
            $scope.user = response.data;
            console.log($scope.user);
        })
    };
})