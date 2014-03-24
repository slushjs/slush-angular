/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('TodoCtrl', function () {
  var todoCtrl,
      scope;

  beforeEach(module('<%= modulename %>'));

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope');

    todoCtrl = function () {
      return $injector.get('$controller')('TodoCtrl', {'$scope': scope});
    };
  }));

  it('should add new todos on add()', function () {
    var todo = {label: 'A new todo', isDone: false};
    todoCtrl();
    scope.label = todo.label;
    scope.add();
    scope.label.length.should.equal(0);
    scope.todos.length.should.equal(1);
    scope.todos[scope.todos.length - 1].label.should.equal(todo.label);
    scope.todos[scope.todos.length - 1].isDone.should.equal(false);
  });
});
