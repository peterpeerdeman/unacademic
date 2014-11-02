(function(){
  var app = angular.module('unacademic');
  app.directive('taskItem', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/tasks/task-item.html',
      controller: function($scope){
        $scope.buttonColor = "button-" + $scope.color;
      },
      scope: {
        task: '=',
        color: '@'
      },
      replace: true
    };
  });
})();
