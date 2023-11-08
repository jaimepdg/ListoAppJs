app.controller('newGameFormController', function($scope, myService, JuegoService, $location, $firebaseArray) {
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
  $scope.uploadImage = function(event) {
    $scope.imageFile = event.target.files[0];
  };
  $scope.addJuego = async function(){
  

    var juego ={
      nombreJuego: $scope.nombre,
      jugadores: $scope.njugadores,
      tiempo: $scope.tiempo,
      solitario: $scope.solitario || false,
      descripcion : $scope.descripcion,

    };
    var nombreJuego = $scope.nombre;

    var ref = firebase.database().ref().child("juegos").child(nombreJuego);
    ref.set(juego)
    console.log("Se debería haber subido a la bd")
  };

 var juego = JuegoService.getJuego();
 if(juego != undefined){
  $scope.nombre = juego.nombreJuego;
  $scope.njugadores = juego.jugadores;
  $scope.tiempo = juego.tiempo;
  $scope.solitario = juego.solitario;
  $scope.descripcion = juego.descripcion;
  $scope.title = typeof juego.nombreJuego !== "undefined" ? "Editar Juego" : "Nuevo Juego";
 }
  

  
  

});
