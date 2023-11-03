var app = angular.module('myApp', ["ngRoute"]);

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
  
