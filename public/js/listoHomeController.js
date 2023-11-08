app.controller('listoHomeController', function($scope, $location,JuegoService, myService, $firebaseArray) {

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

    $scope.editarJuego = function(juego) {
        JuegoService.setJuego(juego);
        $location.path('/newGame');

    };
    $scope.esNuevo = function(){
        JuegoService.setJuego(undefined)
        $location.path('/newGame');
    }
$scope.valoracion = 0; // Valoración inicial

$scope.valorar = function(nombreJuego, estrella) {
    $scope.valoracion = estrella; // Actualizar la valoración

    var ref = firebase.database().ref().child('juegos/' + nombreJuego)
    ref.update({ valoracion: estrella });
};

});