
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bsExtractTextPlugin = new ExtractTextPlugin(1, "bootstrap.css");

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

var bowerDir = __dirname + '/bower_components';
var jqueryDir = bowerDir + '/jquery/dist';
var bootstrapDir = bowerDir + '/bootstrap-sass/assets';
var bootstrapSassDir = bootstrapDir + '/stylesheets';
var bootstrapJsDir = bootstrapDir + '/javascripts';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: {
        app: getEntrySources([
            './src/js/index.js'
        ])
    },
    resolve: { 
        alias: {},
        fallback: ['bower_components']  // modulesDirectories includes node_modules by default already
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/all.js'
    },
    module: {
        noParse: [],
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], include: /src/ },
            { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'autoprefixer?browsers=last 2 version', 'sass?sourceMap&includePaths[]=' + bowerDir + '&includePaths[]=' + bootstrapSassDir], include: /src/ },
            //{ test: /\.scss$/, loader: bsExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') }

            // this is required for bootstrap-sass to work
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    },
    plugins: [
        bsExtractTextPlugin
    ]
};

config.addVendor('jquery', jqueryDir + '/jquery.js');
config.addVendor('bootstrap-js', bootstrapJsDir + '/bootstrap.js');
//config.addVendor('bootstrap.css', bowerDir + '/bootstrap/bootstrap.min.css')

module.exports = config;
