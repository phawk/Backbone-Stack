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
            files: ['grunt.js', 'src/**/!(templates).js', 'tests/**/*.js']
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
            index: ['tests/test-runner.html']
        },
        handlebars: {
            compile: {
                options: {
                    processName: function(filename) {
                        return filename.replace("src/templates/", "");
                    },
                    wrapped: true
                },
                files: {
                    "src/templates/templates.js": "src/templates/**/*.html"
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: "../vendor/almond/almond", // Path to almond requirejs production runner for built js
                    include: ['main'], // Include the main module defined
                    insertRequire: ['main'], // Add a require step in at the end for the main module.
                    wrap: true, // Wrap everything up in a closure
                    generateSourceMaps: true, // Experimental
                    preserveLicenseComments: false, // Needs turned off for generateSourceMaps
                    optimize: "uglify2", // Supports generateSourceMaps
                    baseUrl: "src", // Base url for source code
                    out: "public/javascripts/build.js",
                    paths: {
                        "jquery": "../vendor/jquery/jquery.min",
                        "underscore": "../vendor/underscore/underscore-amd",
                        "backbone": "../vendor/backbone/backbone-amd",
                        "handlebars": "../vendor/handlebars/handlebars.runtime",
                        "templates": "../src/templates/templates"
                    },
                    shim: {
                        'handlebars': {
                            exports: 'Handlebars'
                        },
                        'templates': {
                            deps: ['handlebars'],
                            exports: 'JST'
                        }
                    }
                }
            }
        },
        uglify: {}
    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');

    // Define tasks
    grunt.registerTask('test', 'lint handlebars mocha');
    grunt.registerTask('build', 'test requirejs');
    grunt.registerTask('default', 'build');

};