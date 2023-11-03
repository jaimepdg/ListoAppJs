app.controller('listoHomeController', function($scope, $location, myService) {

    
    myService.setVariable('Home');
    $scope.title = myService.getVariable()
    $scope.goTo = function(ruta){
        $location.path(ruta);
    };
});