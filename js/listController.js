app.controller('listController', function($scope, myService) {

    
    myService.setVariable('Lista');
    $scope.title = myService.getVariable()
    
});