/**
 * Default Task
 * This is the mail task that is invoked for the processing of the slushfile.js
 */
var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer'),
    _ = require('underscore.string');

//Local dependencies
var util = require('../util');

module.exports = function(done) {

    //User Input
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What do you want to name your AngularJS app?',
            default: util.getNameProposal()
        }, {
            type: 'list',
            name: 'csstype',
            message: 'What CSS preprocessor do you want to use?',
            default: 'styl',
            choices: [{
                name: 'Stylus',
                value: 'styl'
            }, {
                name: 'LESS',
                value: 'less'
            }, {
                name: 'Sass',
                value: 'sass'
            }]
        }, {
            type: 'confirm',
            name: 'middleware',
            message: 'Do you want to use middleware for proxy support?',
            default: false
        }, {
            type: 'confirm',
            name: 'coffee',
            message: 'Do you want to use CoffeeScript in your app?',
            default: false
        }, {
            type: 'confirm',
            name: 'example',
            message: 'Do you want to include a Todo List example in your app?',
            default: true
        }],
        function(answers) {
            //Hande for user response
            answers.nameDashed = _.slugify(answers.name);
            answers.modulename = _.camelize(answers.nameDashed);
            var files = [__dirname + '/../templates/**'];
            if (answers.coffee) {
                files.push('!' + __dirname + '/../templates/src/**/*.js')
            } else {
                files.push('!' + __dirname + '/../templates/src/**/*.coffee')
            }
            if (!answers.example) {
                files.push('!' + __dirname + '/../templates/src/app/todo/**');
            }
            answers.styleData = util.cssTypeData[answers.csstype];
            return gulp.src(files)
                .pipe(template(answers))
                .pipe(rename(function(file)  {
                    if (file.extname === '.css') {
                        file.extname = '.' + answers.styleData.extension;
                    } else if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('finish', function() {
                    done();
                });
        });
}
