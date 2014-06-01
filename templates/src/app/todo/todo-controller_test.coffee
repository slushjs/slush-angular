describe 'TodoCtrl', ->
  todoCtrl = null
  scope = null

  beforeEach module('<%= modulename %>')

  beforeEach inject ($injector) ->
    scope = $injector.get('$rootScope')

    todoCtrl = ->
      $injector.get('$controller')('TodoCtrl', $scope:scope)

  it 'should add new todos on add()', ->
    todo = 
      label: 'A new todo'
      isDone: false
    todoCtrl()
    scope.label = todo.label
    scope.add()
    scope.label.length.should.equal(0)
    scope.todos.length.should.equal(1)
    scope.todos[scope.todos.length - 1].label.should.equal(todo.label)
    scope.todos[scope.todos.length - 1].isDone.should.equal(false)
