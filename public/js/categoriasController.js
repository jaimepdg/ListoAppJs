app.controller('categoriasController', function($scope, myService, $location, $firebaseArray) {
    
    
    myService.setVariable('Categorías');
    $scope.title = "Categorías"
    
    
    $scope.goTo = function(ruta){
        $location.path(ruta);
    };

    $scope.showNewItem = false;
    $scope.listItems=[]
    $scope.addNewItem = function() {
      $scope.showNewItem = true;
      $scope.showAddBtn = false
    };
    
    $scope.showAddBtn = true
    
    $scope.saveNewItem = function() {
        var categoria = $scope.categoria;
        var ref = firebase.database().ref().child("categorias/" + categoria).set({
            nombre: categoria
        });
        $scope.showNewItem = false;
        $scope.showAddBtn = true;
    };
    
    $scope.cancelNewItem = function() {
      $scope.newItemText = '';
      $scope.showNewItem = false;
      $scope.showAddBtn = true
    };

    var ref = firebase.database().ref().child("categorias");
    $scope.categorias = $firebaseArray(ref);
});