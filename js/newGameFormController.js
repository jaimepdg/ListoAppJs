app.controller('newGameFormController', function($scope, myService, $location, $firebaseArray) {
  myService.setVariable('Nuevo Juego');

 
 
  $scope.title = myService.getVariable()

  var ref = firebase.database().ref().child("juegos");
  $scope.juegos = $firebaseArray(ref);

  $scope.goTo = function(ruta){
    $location.path(ruta);
    console.log(ruta)
  };
  
  $scope.getSliderValue = function(){
    $scope.njugadores = $scope.njugadores
  };

  $scope.addJuego = function(){
    var juego ={
      nombreJuego: $scope.nombre,
      jugadores: $scope.njugadores,
      tiempo: $scope.tiempo,
      solitario: $scope.solitario || false
    };
    var nombreJuego = $scope.nombre;

    var ref = firebase.database().ref().child("juegos").child(nombreJuego);
    ref.set(juego)
    console.log("Se debería haber subido a la bd")
  }
});
