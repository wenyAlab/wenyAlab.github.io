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
            
        ]
    },
    devServer:{
        contentBase:'./',
        inline:true
    
    }
}