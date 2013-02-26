/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        /**
        *  Watching
        *  ========
        *
        *  Automatically tests and builds your code
        *  whenever you edit the source files or tests.
        */
        watch: {
            scripts: {
                files: ['src/**/!(templates).js', 'src/**/*.html', 'tests/**/*.js'],
                tasks: ['build'],
                options: {
                    interrupt: true
                }
            }
        },


        /**
        *  Linting
        *  =======
        *
        *  Catch errors quickly with JS Hint
        */
        jshint: {
            all: ['Gruntfile.js', 'src/**/!(templates).js', 'test/**/*.js'],
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
                trailing: true, // Prohibits trailing whitespace

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
            }
        },


        /**
        *  Testing
        *  =======
        *
        *  Run your unit tests in headless phantomJS
        */
        mocha: {
            index: ['test/test-runner.html']
        },


        /**
        *  Templating
        *  ==========
        *
        *  Pre-compile your handlebars templates
        */
        handlebars: {
            compile: {
                options: {
                    amd: true,
                    wrapped: true,
                    processName: function(filename) {
                        return filename.replace("src/templates/", "");
                    }
                },
                files: {
                    "src/templates.js": "src/**/*.html"
                }
            }
        },


        /**
        *  Building
        *  ========
        *
        *  Build your amd modules into a single minified JS file
        */
        requirejs: {
            compile: {
                options: {
                    name: "../components/almond/almond", // Path to almond requirejs production runner for built js
                    baseUrl: "src",
                    mainConfigFile: "./require.config.js",
                    include: ['main'], // Include the main module defined
                    insertRequire: ['main'], // Add a require step in at the end for the main module.
                    wrap: true, // Wrap everything up in a closure
                    generateSourceMaps: true, // Experimental
                    preserveLicenseComments: false, // Needs turned off for generateSourceMaps
                    optimize: "uglify2", // Supports generateSourceMaps
                    out: "assets/javascripts/build.js"
                }
            }
        },
        
        /**
         *  Stylesheets
         *  ===========
         *
         *  Compile, concat & lint css and less files into a single output file
         */
        less: {
            dist: {
                options: {
                    paths: ["src/styles"],
                    yuicompress: true
                },
                files: {
                    'assets/stylesheets/styles.css': 'src/styles/main.less'
                }
            }
        }

    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Define tasks
    grunt.registerTask('test', ['jshint', 'handlebars', 'mocha']);
    grunt.registerTask('styles', ['less']);
    grunt.registerTask('build', ['test', 'requirejs', 'styles']);
    grunt.registerTask('default', 'build');

};