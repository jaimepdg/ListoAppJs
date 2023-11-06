var app = angular.module('myApp', ["ngRoute",'firebase']);

const firebaseConfig = {
    apiKey: "AIzaSyBFBORUoZFZgZlJxSbOR0y9BNM_lqN5Cgc",
    authDomain: "listogames-a60c5.firebaseapp.com",
    databaseURL: "https://listogames-a60c5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "listogames-a60c5",
    storageBucket: "listogames-a60c5.appspot.com",
    messagingSenderId: "46944977034",
    appId: "1:46944977034:web:22ccb66a47c26abed3ed73",
    measurementId: "G-8T02884T8J"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl: "views/listoHome.html",
        controller: "listoHomeController"
    })
    .when("/list", {
        templateUrl: "views/list.html",
        controller: "listController"
    })
    .when("/settings", {
        templateUrl: "views/listoSettings.html",
        controller: "listoSettingsController",
        
    })
    .when("/newGame", {
        templateUrl: "views/newGameForm.html",
        controller: "newGameFormController",
        
    });
});

app.service('myService', function() {
    var myVariable = '';
  
    return {
      getVariable: function() {
        return myVariable;
      },
      setVariable: function(value) {
        myVariable = value;
      }
    };
});
  
