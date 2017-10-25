const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    //Exposed all Objects

    //Created any name
     entry: [
         'babel-polyfill',
         './app/index.js'
     ],
     output:{
         path: __dirname + '/public',
         filename: './bundle.js'
     },

     //WebPack Local Server
     devServer:{
         port:8080,
         contentBase: './public'
     },

     plugins:[
         new ExtractTextPlugin('app.css')
     ],

     module:{
         loaders : [{
             test:/.js?$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             query:{
                 presets: ['es2015'],
                 plugins: ['transform-object-rest-spread']
             }
         },{
             test:/\.css$/,
             loader: ExtractTextPlugin.extract("style-loader","css-loader")
         }]
     }

}
