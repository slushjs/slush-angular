/**
 * cssTypeData configuration
 * @type {cssTypeData}
 */
module.exports.cssTypeData =  {
    'less': {
        plugin: 'gulp-less',
        pluginVersion: '^1.2.3',
        pipeCommand: 'g.less()',
        extension: 'less'
    },
    'sass': {
        plugin: 'gulp-sass',
        pluginVersion: '^0.7.1',
        pipeCommand: 'g.sass()',
        extension: 'scss'
    },
    'styl': {
        plugin: 'gulp-stylus',
        pluginVersion: '^1.0.2',
        pipeCommand: 'g.stylus({use: [require(\'nib\')()]})',
        extension: 'styl',
        extraDependencies: {
            'nib': '^1.0.2'
        }
    }
};

/**
 * Proposes the names based on the path/package.json file.
 * @return {String} name
 */
module.exports.getNameProposal =  function() {
    var path = require('path');
    try {
        return require(path.join(process.cwd(), 'package.json')).name;
    } catch (e) {
        return path.basename(process.cwd());
    }
}
