var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer'),
    _ = require('underscore.string');

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What do you want to name your AngularJS app?', default: getNameProposal()},
    {type: 'list', name: 'csstype', message: 'What CSS preprocessor do you want to use?', default: 'styl', choices: [{name: 'Stylus', value: 'styl'}, {name: 'LESS', value: 'less'}]},
    {type: 'confirm', name: 'example', message: 'Do you want to include a Todo List example in your app?', default: true}
  ],
  function (answers) {
    answers.nameDashed = _.slugify(answers.name);
    answers.modulename = _.camelize(answers.nameDashed);
    var files = [__dirname + '/templates/**'];
    if (!answers.example) {
      files.push('!' + __dirname + '/templates/src/app/todo/**');
    }
    return gulp.src(files)
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.extname === '.css') {
          file.extname = '.' + answers.csstype;
        } else if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function () {
        done();
      });
  });
});

function getNameProposal () {
  var path = require('path');
  try {
    return require(path.join(process.cwd(), 'package.json')).name;
  } catch (e) {
    return path.basename(process.cwd());
  }
}
