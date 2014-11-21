'use strict';

module.exports = function (grunt) {
	var target = grunt.option('target') || 'develop';
	var config = {
			'rootdir': '/Users/lmairl/Projects/css_framework'
	};

	grunt.initConfig({
		config: config,

		uglify: {
			options: {
		  		mangle: false
			},
			dist: {
		  		files: {
		    		
		  		}
			}
		},
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
        cssmin: {
        	options: {
        		report: 'gzip'
        	},
            css:{
                src: 'css/framework.css',
                dest: 'css/framework.min.css'
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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('dev', [
		'compass:'+ target,
		'watch'
	]);

	grunt.registerTask('jsmin', [
		'uglify'
	]);

	grunt.registerTask('csscompress', [
		'cssmin'
	]);

};
