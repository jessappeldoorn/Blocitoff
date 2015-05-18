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

  $scope.tasks = $firebaseArray(ref);


  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText
    });
  };

 // create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
//var tasksArray = sync.$asArray();

// place it in the scope for use in the DOM
$scope.tasks = tasksArray;

var tasks = sync.$asArray();

// ADD TO FIREBASE

  $scope.testAdd = function(){
    $scope.tasks.$add({ note: 'finish user story 1'});
    $scope.tasks.$add({ note: 'grocery shopping'});
    $scope.tasks.$add({ note: 'clean bedroom'});
};

}]);

/*blocitoff.controller('home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/");
  $scope.tasks = $firebaseArray(ref);

  // var thing = 'whatever';
 // $scope.task.$add(thing);

  $scope.testAdd = function(){
    $scope.tasks.$add({note: 'checkpoint'});
    $scope.tasks.$add({note: 'goodbye'});
}

}]);*/



