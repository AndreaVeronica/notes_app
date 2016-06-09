angular.module('notesApp', ['ui.router']);

angular.module('notesApp')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/home");
  //$locationProvider.html5Mode(true);

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
.controller('mainCtrl', function($http, $stateParams, $state) {

  var ctrl = this;
  ctrl.email;
  ctrl.password;
  ctrl.user;

  var currentU = "";

  function getCurrentUser(){
    console.log('test');
      $http.get('/currentUser')
        .then(function(response){
           console.log(response);
           ctrl.user = response.data;
        });
  }

  getCurrentUser();

  //login function

  ctrl.attemptLogin = attemptLogin;

      function attemptLogin(){
          $http.post('/login', {email: ctrl.email, password: ctrl.password})
          .then(function(response){
            console.log(response);
            if (response.data){
               ctrl.user = response.data;
               currentU = ctrl.user._id
               console.log(currentU);
               $state.go('notes');
            }

        });
     }

  //signin function

  ctrl.attemptSignup = attemptSignup;

      function attemptSignup(){
          $http.post('/signup', {email: ctrl.email, password: ctrl.password})
          .then(function(response){
            console.log(response.data.user);
            //save user and change state to user profile.
            if (response.data){
               $state.go('notes');
            }
          });
      }

});





angular.module('notesApp')
.controller('notesCtrl', function($http) {
  console.log('notesCtrl is alive!');

  var ctrl = this;
  ctrl.notes = [];
  ctrl.newNote = {
    title: '',
    text: ''
  };

  ctrl.getNotes = function() {
    $http.get('/api/notes').then(function(response) {
      ctrl.notes = response.data;
      console.log('ctrl.notes:', ctrl.notes);
    });
  };

  ctrl.getNotes();

  ctrl.addNote = function(){
    console.log('adding newNote:', ctrl.newNote);
    $http
      .post('/api/notes/new', ctrl.newNote)
      .then(function(response){
        console.log('new note added.');
        console.log(response);
        ctrl.getNotes();
      }, function(err) {
        alert('something went wrong!');
      });
      ctrl.newNote = {};
      console.log("add note is working");
  };


 ctrl.deleteNote = function(){
  $http
    .delete('/api/notes' + note._id)
    .then(function(response){
      var index = ctrl.all.indexOf(note);
      ctrl.all.splice(index,1);
    });
 }


});

