'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      build: {
        src: 'src/js/bootstrap-datetimepicker.js',
        dest: 'build/js/bootstra-datetimepicker.min.js'
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/bootstrap-datetimepicker.min.css':
          'src/sass/bootstrap-datetimepicker-build.scss'
        }
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['uglify', 'sass']);
};
