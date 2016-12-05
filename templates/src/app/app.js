
angular.module('<%= modulename %>', [
  'ngRoute',
  'restangular'<% if (example) { %>,
  '<%= modulename %>.todo'<% } %>
])<% if (example) { %>
.config(function ($routeProvider, RestangularProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: 'todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });

  RestangularProvider.setBaseUrl('/api');
})<% } %>;
