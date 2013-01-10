/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.html', 'tests/**/*.js'],
                tasks: ['build'],
                options: {
                    interrupt: true
                }
            }
        },
        lint: {
            files: ['grunt.js', 'src/**/*.js', 'tests/**/*.js']
        },
        jshint: {
            options: {
                es5: true, // Allows EcmaScript5 syntax
                curly: true, // Always use curlys {}
                eqeqeq: true, // No more == for you, === only
                immed: true, // prohibits the use of immediate function invocations without wrapping them in parentheses
                latedef: true, // no setting variables before they are defined
                newcap: true, // Always call constructors with a Cap
                noarg: true, // prohibits arguments.caller and arguments.callee
                sub: true, // This option suppresses warnings about using [] notation when it can be expressed in dot notation: person['name'] vs. person.name.
                undef: true, // prohibits the use of explicitly undeclared variables
                boss: true, // Allows assignments in ifs - if (a = 10) {}
                eqnull: true, // Allows == null check for null or undefined
                browser: true, // Sets up globals for browser like window and document
                maxdepth: 3, // Max nesting of methods 3 layers deep
                maxparams: 4, // Max params passed to a method is 4
                unused: true, // Warns on unused variables
                expr: true, // Allowed for chais expect(false).to.be.false; assertion style.
                devel: true, // Allows console.log's etc
                trailing: true // Prohibits trailing whitespace
            },
            globals: {
                require: true,
                define: true,
                requirejs: true,
                suite: true,
                expect: true,
                test: true,
                setup: true,
                teardown: true,
                sinon: true,
                mocha: true
            }
        },
        mocha: {
            index: ['tests.html']
        },
        requirejs: {
            compile: {
                options: {
                    name: "main",
                    generateSourceMaps: true, // Experimental
                    preserveLicenseComments: false, // Needs turned off for generateSourceMaps
                    optimize: "uglify2", // Supports generateSourceMaps
                    baseUrl: "src",
                    out: "public/javascripts/build.js",
                    paths: {
                        "jquery": "../libs/jquery/jquery-1.8.3.min",
                        "underscore": "../libs/underscore/underscore-min",
                        "backbone": "../libs/backbone/backbone-min",
                        "hbs": "../libs/require/hbs",
                        "i18nprecompile": "../libs/require/hbs/i18nprecompile",
                        "json2": "../libs/require/hbs/json2",
                        "handlebars": "../libs/handlebars/handlebars",
                        "text": "../libs/require/text"
                    },
                    shim: {
                        'underscore': {
                            exports: '_'
                        },
                        'backbone': {
                            deps: ['underscore', 'jquery'],
                            exports: 'Backbone'
                        },
                        'handlebars': {
                            exports: 'Handlebars'
                        }
                    },
                    hbs: {
                        disableI18n: true,
                        disableHelpers: true,
                        templateExtension: "html"
                    }
                }
            }
        },
        uglify: {}
    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');

    // Define tasks
    grunt.registerTask('test', 'lint mocha');
    grunt.registerTask('build', 'test requirejs');
    grunt.registerTask('default', 'build');

};