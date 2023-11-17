app.controller('newGameFormController', function($scope, myService, JuegoService, $location, $firebaseArray) {
  myService.setVariable('Nuevo Juego');
  

  $scope.title = myService.getVariable()

  var ref = firebase.database().ref().child("juegos");
  $scope.juegos = $firebaseArray(ref);

  var ref = firebase.database().ref('categorias');
  ref.once('value').then(function(snapshot) {
    $scope.$apply(function() {
      $scope.categorias = snapshot.val();
    });
  }).catch(function(error) {
    console.error('Error al cargar categorías:', error);
  });


  $scope.goTo = function(ruta){
    $location.path(ruta);
    console.log(ruta)
  };
  
  $scope.getSliderValue = function(){
    $scope.njugadores = $scope.njugadores
  };
  $scope.addJuego = async function(){
    var juego ={
      nombreJuego: $scope.nombre || null,
      jugadores: $scope.njugadores || null,
      tiempo: $scope.tiempo || null,
      solitario: $scope.solitario || false,
      descripcion : $scope.descripcion || null,
      categoria : $scope.selectedCategory || null, // Aquí se añade la categoría seleccionada
    };
  
    var nombreJuego = $scope.nombre || 'nombrePorDefecto';
  
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
  $scope.categoria = juego.categoria;
  $scope.title = typeof juego.nombreJuego !== "undefined" ? "Editar Juego" : "Nuevo Juego";
 }
  





 
 $scope.categorias = {};
  $scope.selectedCategory = null;

  var ref = firebase.database().ref('categorias');
  ref.once('value').then(function(snapshot) {
    $scope.$apply(function() {
      $scope.categorias = snapshot.val();
      // Asegúrate de que selectedCategory se establece después de que los datos se han cargado
      $scope.selectedCategory = $scope.categorias[Object.keys($scope.categorias)[0]];
    });
  }).catch(function(error) {
    console.error('Error al cargar categorías:', error);
  });

  $scope.$watch('selectedCategory', function(newVal, oldVal) {
    if (newVal) {
      console.log('Categoría seleccionada:', $scope.selectedCategory);
    }
  });
  

});
