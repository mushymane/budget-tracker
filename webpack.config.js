const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        db: './public/db.js',
        index: './public/index.js'
    },
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].bundle.js',
        publicPath: '' //removes auto from icons in manifest.json
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackPwaManifest({
            filename: 'manifest.json',
            inject: false,
            fingerprints: false,
            name: 'Budget Tracker',
            short_name: 'Budget',
            description: 'An app that helps you track deposits and expenses',
            background_color: '#ffffff',
            theme_color: '#ffffff',
            start_url: '/',
            display: 'standalone',
            icons: [
                {
                    src: path.resolve(__dirname, "public/icons/icon-512x512.png"),
                    sizes: [192, 512]
                }
            ]
            
        })
    ]
}

module.exports = config;