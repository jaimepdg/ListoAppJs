app.controller('listController', function($scope, myService) {

    
    myService.setVariable('Lista');
    $scope.title = myService.getVariable()
    

    $scope.showNewItem = false;
$scope.listItems=[]
$scope.addNewItem = function() {
  $scope.showNewItem = true;
  $scope.showAddBtn = false
};

$scope.showAddBtn = true

$scope.saveNewItem = function() {
    $scope.listItems.push($scope.newItemText)
    $scope.newItemText = '';
  $scope.showNewItem = false;
  $scope.showAddBtn = true
  
};

$scope.cancelNewItem = function() {
  $scope.newItemText = '';
  $scope.showNewItem = false;
  $scope.showAddBtn = true
};

});