
angular.module('<%= modulename %>', [
  'ngRoute'<% if (example) { %>,
  '<%= modulename %>.todo'<% } %>
])<% if (example) { %>
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: 'todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
})<% } %>;
