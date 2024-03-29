const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    hmrOptions: {
        host: 'laravel-boilerplate.dev.local',  // site's host name
        port: 8080,
    }
});

// // fix css files 404 issue
mix.webpackConfig({
    // add any webpack dev server config here
    devServer: {
        proxy: {
            host: '0.0.0.0',  // host machine ip
            port: 8080,
        },
        watchOptions:{
            aggregateTimeout:200,
            poll:5000
        },

    }
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
