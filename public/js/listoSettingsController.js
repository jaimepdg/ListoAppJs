app.controller('listoSettingsController', function($scope, myService, $location) {
    
    
    myService.setVariable('Settings');
    $scope.title = "Settings"
    
    
    $scope.goTo = function(ruta){
        $location.path(ruta);
    };


});