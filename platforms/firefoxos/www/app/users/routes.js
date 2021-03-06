(function(){
  var app = angular.module('unacademic.users');

  app.config(function($stateProvider) {

    $stateProvider.state('app.users', {
      url: '/users',
      templateUrl: 'app/users/views/users.html',
      controller: "Users as users"
    });

    $stateProvider.state('app.profile', {
      url: '/profile',
      templateUrl: 'app/users/views/profile.html',
      controller: "Profile as user",
    });
  });
})();
