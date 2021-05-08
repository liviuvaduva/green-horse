const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
//</editor-fold>

mix.js(
    [
        'resources/js/app.js',
        'resources/js/green-horse/green-horse.js'
    ], 'public/js')
    .css('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/app.css')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
