!function() {
    'use strict';
    const gulp = require('gulp'),
        ts = require('gulp-typescript'),
        sourcemaps = require('gulp-sourcemaps'),
        eslint = require('gulp-eslint'),
        through2 = require('through2'),
        glob = require('glob'),
        path = require('path'),
        webpack = require('webpack'),
        webpackStream = require('webpack-stream');

    gulp.task('ts', () => {
        const tsProject = ts.createProject('tsconfig.app.json');
        return gulp.src([
            'src/date-extended.ts',
        ])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError())
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.build'))
            .pipe(through2.obj((file, enc, cb) => {
                if (!file.basename.includes('.d.ts')) {
                    cb();
                    return;
                }
                cb(null, file);
            }))
            .pipe(gulp.dest('dist'))
    });

    gulp.task('i18n', () => {
        const tsProject = ts.createProject('tsconfig.i18n.json');
        return gulp.src([
            'src/i18n/*.ts'
        ])
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('.build/i18n'))
    });

    gulp.task('bundle', () => {
        return _bundle(false);
    });

    gulp.task('bundle:prod', () => {
        return _bundle(true);
    });

    function _bundle(production) {
        const entries = {
            'DateExtended': './.build/date-extended.js'
        };

        glob.sync('i18n/*.js', {
            cwd: path.join(process.cwd(), '.build')
        }).forEach((filePath) => {
            entries[filePath.replace('.js', '')] = {
                import: './' + path.join('.build', filePath),
                dependOn: 'DateExtended'
            }
        });

        return gulp.src('dummy', {allowEmpty: true})
            .pipe(webpackStream({
                entry: entries,
                mode: production ? 'production' : 'development',
                output: {
                    devtoolNamespace: 'DateExtended',
                    filename: (pathData) => {
                        let name = pathData.chunk.name;
                        return name.substring(0, 1).toLowerCase()
                            + name.substring(1).replace(/[A-Z]/g, (letter) => {
                                return '-' + letter.toLowerCase();
                            })
                            + (production ? '.min' : '') + '.js'
                    },
                    library: '[name]',
                    libraryTarget: 'umd',
                    libraryExport: 'default',
                    umdNamedDefine: true,
                    globalObject: 'window'
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            enforce: 'pre',
                            use: ['source-map-loader'],
                        },
                    ],
                },
                devtool: 'source-map'
            }, webpack))
            .pipe(gulp.dest('dist'));
    }

    gulp.task('watch', function() {
        [
            ['src/date-extended.ts', 'ts'],
            ['src/i18n/*.ts', 'i18n']
        ].forEach(([src, task]) => {
            gulp.watch(src, {}, gulp.series(task, 'bundle', 'bundle:prod'));
        });
    });

    //
    exports.default = gulp.series('ts', 'i18n', 'bundle', 'bundle:prod');
}();
