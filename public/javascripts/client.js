angular.module('notesApp', ['ui.router']);

angular.module('notesApp')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('notes', {
      url: "/notes",
      templateUrl: "views/notes.html",
      controller: "notesCtrl",
      controllerAs: "ctrl"
    })
    .state('notessShow', {
      url: "/notes/:noteId",
      templateUrl: "views/notes-show.html",
      controller: "notesShowCtrl",
      controllerAs: "ctrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html"
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html"
    });
});


//main controller


angular.module('notesApp')
.controller('mainCtrl', function($http, $stateParams) {

  var ctrl = this;
  ctrl.email;
  ctrl.password;


  //login function

  ctrl.attemptLogin = attemptLogin;

      function attemptLogin(){
          $http.post('/login', {email: ctrl.email, password: ctrl.password})
          .then(function(response){
            console.log(response);
          });
      }

  //signin function

  ctrl.attemptSignup = attemptSignup;

      function attemptSignup(){
          $http.post('/signup', {email: ctrl.email, password: ctrl.password})
          .then(function(response){
            console.log(response);
          });
      }

});





angular.module('notesApp')
.controller('notesCtrl', function($http) {
  console.log('notesCtrl is alive!');

  var ctrl = this;
  ctrl.notes = [];

  ctrl.getNotes = function() {
    $http.get('/api/notes').then(function(response) {
      ctrl.notes = response.data;
      console.log('ctrl.notes:', ctrl.notes);
    });
  };

  ctrl.getNotes();
});


angular.module('notesApp')
.controller('notesShowCtrl', function($http, $stateParams) {
  console.log('notesShowCtrl is alive!');

  var ctrl = this;
  ctrl.note = {};

  $http.get('/api/notes/' + $stateParams.noteId).then(function(response) {
    ctrl.note = response.data;
  });
});

