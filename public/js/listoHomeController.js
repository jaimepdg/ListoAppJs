app.controller('listoHomeController', function($scope, $location, myService, $firebaseArray) {

    $scope.showAddBtn = true
    myService.setVariable('Home');
    $scope.title = myService.getVariable()
    $scope.goTo = function(ruta){
        $location.path(ruta);
    };
    $scope.addNewGame = function(){
        $scope.showNewItem = true;
        $scope.showAddBtn = false;
    }
    var ref = firebase.database().ref().child("juegos");
    $scope.juegos = $firebaseArray(ref);
});