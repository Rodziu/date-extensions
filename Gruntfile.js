module.exports = function(grunt){
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: '*', dest: 'dist/'}
				]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.description %> v.<%= pkg.version %> | (c) 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['copy', 'uglify', 'karma']);

};