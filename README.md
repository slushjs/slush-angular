slush-angular
==============

> A [slush](http://klei.github.io/slush/) generator for AngularJS using the [Google Angular App Structure Recommendations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

## Installation

Install `slush-angular` globally:

```bash
npm install -g slush-angular
```

Remember to install `slush` globally as well, if you haven't already:

```bash
npm install -g slush
```

## Usage

Create a new folder for your project:

```bash
mkdir my-angular-app
```

Run the generator from within the new folder:

```bash
cd my-angular-app

slush angular
```

You will now be prompted to give your new AngularJS app a name, which will be dasherized and used in its `bower.json` and `package.json` respectively. The chosen name will be camelized and used as the main angular module as well, inside `src/app/app.js`.

### CSS Preprocessor

You can choose between `LESS`, `Stylus`, and `Sass` to use as the CSS Preprocessor for your project.

*Note* All `_*.styl`, `_*.less`, or `_*.scss` files will be considered "partials" and must be imported in another stylesheet file (without a leading "_") to be compiled.

### Project structure

You will also have the option to generate a simple Todo list app in your project as well, to be used as a live example of how to structure your app.

The project structure with the Todo list example included will look like this:

```
my-angular-app/
├── .bowerrc
├── .csslintrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── bower.json
├── gulpfile.js                             # See "Gulpfile" below
├── karma.conf.js
├── README.md
├── package.json
└── src
    └── app
        ├── app.js                          # Main app module and configuration
        ├── app.styl/less/scss              # Main app stylesheet
        ├── index.html                      # The index.html / app layout template
        ├── assets                          # A folder meant for images and such...
        │   └── .gitkeep
        ├── styles
        │   └── _base.styl/less/scss        # A stylesheet partial with base styles
        └── todo
            ├── todo-controller.js          # The todo controller
            ├── todo-controller_test.js     # Karma test for the todo controller
            ├── todo.html                   # The todo list template
            ├── todo.js                     # The todo module
            └── todo.styl/less/scss         # Todo module specific styles
```

### Gulpfile

#### Development

To start developing in your new generated project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves your AngularJS application, and a watch task which watches your files for changes and lints, builds and injects them into your index.html accordingly.

#### Tests

To run tests run:

```bash
gulp test
```

#### Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now you have a `./dist` folder with all your scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

## Changelog

### V.0.3

**0.3.2**:

- Fixing jshint errors in newly generated angular app with stylus as CSS preprocessor

**0.3.1**:

- Explicitly set port 3000 ([#4](https://github.com/klei/slush-angular/pull/4))
- Remove bad output in console
- Update gulp to `3.6.1`

**0.3.0**:

- Adding Sass as CSS preprocessor alternative (Thanks to [@ajoslin](https://github.com/ajoslin)'s PR[#2](https://github.com/klei/slush-angular/pull/2))
- Adding `.tmp/` to the generated project's .gitignore ([#3](https://github.com/klei/slush-angular/pull/3))

### V.0.2

**0.2.0**:

- Using `gulp-angular-filesort` to sort app files correctly on injection/concatenation
- Adding `.bowerrc` (see [#1](https://github.com/klei/slush-angular/pull/1))

### V.0.1

**0.1.0** - First version

## License

MIT
