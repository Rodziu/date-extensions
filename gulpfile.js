/*
 * AngularJS TableTools Plugin
 *  Copyright (c) 2016-2019 Rodziu <mateusz.rohde@gmail.com>
 *  License: MIT
 */

!function(){
	'use strict';
	const pkg = require('./package'),
		gulp = require('gulp'),
		rename = require('gulp-rename'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify-es').default,
		eslint = require('gulp-eslint');

	gulp.task('js', function(){
		return gulp.src([
			'src/date-extended.js'
		])
			.pipe(sourcemaps.init())
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failOnError())
			.pipe(gulp.dest('dist'))
			.pipe(rename(pkg.name + '.min.js'))
			.pipe(uglify())
			.pipe(sourcemaps.write('./', {includeContent: false}))
			.pipe(gulp.dest('dist'));
	});

	gulp.task('i18n', function(){
		return gulp.src([
			'src/i18n/*.js'
		])
			.pipe(gulp.dest('dist/i18n'));
	});

	gulp.task('watch', function() {
		[
			['src/date-extended.js', 'js'],
			['src/i18n/*.js', 'i18n']
		].forEach(([src, task]) => {
			gulp.watch(src, {}, gulp.series(task));
		});
	});

	//
	exports.default = gulp.series('js', 'i18n');
}();
