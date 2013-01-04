/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        lint: {
            files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
        },
        watch: {
            scripts: {
                files: 'src/**/*.js',
                tasks: ['requirejs'],
                options: {
                    interrupt: true
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },
        uglify: {},
        requirejs: {
            compile: {
                options: {
                    name: "main"
                  , generateSourceMaps: true // Experimental
                  , preserveLicenseComments: false // Needs turned off for generateSourceMaps
                  , optimize: "uglify2" // Supports generateSourceMaps
                  , baseUrl: "src"
                  , out: "public/javascripts/build.js"
                  , paths: {
                        "jquery": "../libs/jquery/jquery-1.8.3.min"
                      , "underscore": "../libs/underscore/underscore-min"
                      , "backbone": "../libs/backbone/backbone-min"
                      , "hbs": "../libs/require/hbs"
                      , "i18nprecompile": "../libs/require/hbs/i18nprecompile"
                      , "json2": "../libs/require/hbs/json2"
                      , "handlebars": "../libs/handlebars/handlebars"
                      , "text": "../libs/require/text"
                    }
                  , shim: {
                        'underscore': {
                            exports: '_'
                        }
                      , 'backbone': {
                            deps: ['underscore', 'jquery']
                          , exports: 'Backbone'
                        }
                      , 'handlebars': {
                            exports: 'Handlebars'
                        }
                    }
                  , hbs: {
                        disableI18n: true,
                        disableHelpers: true,
                        templateExtension: "html"
                    }
                }
            }
        }
    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    // grunt.registerTask('default', 'lint qunit concat min');
    grunt.registerTask('default', 'lint requirejs');

};