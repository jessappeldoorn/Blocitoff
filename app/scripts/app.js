// add angular module
// inject firebase
var app = angular.module("Blocitoff", ["firebase", "ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Home.controller',
     templateUrl: '/templates/home.html'
   });
 }]);
// add a controller
app.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);

  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText
    });
  };

  $scope.deleteTask = function(task){
    $scope.tasks.$remove(task)
}

// ADD TO FIREBASE

/*  $scope.testAdd = function(){
    $scope.tasks.$add({ note: 'finish user story 1'});
    $scope.tasks.$add({ note: 'grocery shopping'});
    $scope.tasks.$add({ note: 'clean bedroom'});
	};*/
}]);



