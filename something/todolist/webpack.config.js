var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        entry:'./index.js'
    },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    devServer:{
        contentBase:'./',
        inline:true,
        port:7000
    }

}