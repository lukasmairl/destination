'use strict';

module.exports = function (grunt) {
	var target = grunt.option('target') || 'develop';
	var config = {
			'rootdir': '/Users/lmairl/Projects/css_framework'
	};

	grunt.initConfig({
		config: config,

		compass: {
			develop: {
				options: {
					httpPath:'/',
					sassDir: config.rootdir + '/css/scss',
					cssDir: config.rootdir + '/css',
					imagesDir: config.rootdir + '/images/sprites',
					httpGeneratedImagesPath:'/images/sprites'
				}
			}
		},

		watch: {
			options: {
				nospawn: true
			},

			css: {
				files: ['<%= config.rootdir %>/css/scss/*.scss', '<%= config.rootdir %>/css/scss/**/*.scss' ],
				tasks: ['compass:'+ target]
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('dev', [
		'compass:'+ target,
		'watch'
	]);

};
