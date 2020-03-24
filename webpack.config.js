const { VueLoaderPlugin } = require ('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // Configuración de Webpack
    // Archivo de entrada
    entry: './src/index.js',
    //  Archivo de salida
    output: {
        // Ruta
        path: __dirname + '/dist',
        // Nombre del archivo
        filename: 'bundle.js'
    },
    // Configuracion de babel
    module: {
        rules: [
            {
                // Testea todos los archivos que terminen con .js
                test: /\.js$/,
                // Excluye la carpeta node_modules ( no conviertes estos modulos)
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            {
                // Testea los archivos .vue
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            // Ruta de archivo index.html
            template: './src/index.html'
        })
    ]

};