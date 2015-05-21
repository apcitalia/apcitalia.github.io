module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  
	  
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['groupJs/*.js'],
        dest: 'dist/scripts.js'
      },
      css: {
        src: ['groupCss/*.css'],
        dest: 'dist/styles.css'
      },
    },
	
    uglify: {
      options: {
      },
      distjs: {
        files: {
          'dist/scripts.min.js': ['templates/**/*.js','media/**/*.js','plugin/**/*.js','components/**/*.js']
        },	
      },
    },
    
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', [ 'concat', 'uglify']);
  

};
