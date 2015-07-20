var bigPanda = angular.module('bigPanda', []);

bigPanda.factory('github', function($http) {

    var githubStatus = function() {
        return $http.get("/github").then(function(result){
            var status = result.data;
            console.log(status)
            return status
        });
    };

    return {githubStatus: githubStatus};
});

function mainController($scope, github) {
  var myDataPromise = github.githubStatus();
  myDataPromise.then(function(result) {
     $scope.github = result;
     console.log(result);
  });
}
