angular
  .module '<%= modulename %>.todo'
  .controller 'TodoCtrl', ($scope, $window) ->
    'use strict'
    $scope.todos = JSON.parse($window.localStorage.getItem('todos') or '[]')
    $scope.$watch('todos', (newTodos, oldTodos) ->
      if (newTodos != oldTodos)
        $window.localStorage.setItem 'todos', JSON.stringify(angular.copy($scope.todos))
    , true)

    $scope.add = ->
      todo = 
        label: $scope.label
        isDone: false
      $scope.todos.push(todo)
      $window.localStorage.setItem 'todos', JSON.stringify(angular.copy($scope.todos))
      $scope.label = ''

    $scope.check = ->
      @todo.isDone = not @todo.isDone
