const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TransformRuntime= require("@babel/plugin-transform-runtime");

let generatedHtmlPath = 'target/generated-resources/frontend/';
const sourceForntend = 'frontend/src/';
// const isDevelopment = process.env.NODE_ENV === 'development';
const isDevelopment = true;
const isProduction = !isDevelopment;

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDevelopment,
                reloadAll: true
            }
        }, 'css-loader'
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};


const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: sourceForntend +'/index.html',
            inject: 'body',
            // publicPath: 'js',
            minify: {
                collapseWhitespace: isProduction
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'frontend/lib'),
                    to: path.resolve(__dirname, generatedHtmlPath + 'js/')
                },
                {
                    from: path.resolve(__dirname, sourceForntend +'style/'),
                    to: path.resolve(__dirname, generatedHtmlPath + 'style/')
                },
				{
                    from: path.resolve(__dirname, sourceForntend +'img/'),
                    to: path.resolve(__dirname, generatedHtmlPath + 'img/')
                },
                {
                    from: path.resolve(__dirname, sourceForntend +'fonts/'),
                    to: path.resolve(__dirname, generatedHtmlPath + 'fonts/')
                }
            ]}),
        /*new TransformRuntime({
            "regenerator": true
        })*/

        /*new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, "LICENSE"),
					noErrorOnMissing: true
                }
            ]
        })
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, sourceForntend + 'lib/*.js'),
                to: path.resolve(__dirname, generatedHtmlPath + 'js/')
            }
        ])*/
        /*new MiniCssExtractPlugin({
            filename: filename('css')
        })*/
    ];

    if (isProduction) {
        base.push(new BundleAnalyzerPlugin());
    }

    return base;
};

module.exports = {
    mode: 'development',
    entry: {
        // main: ["./frontend/src/jsx/Main.jsx"],
        main: ["./frontend/src/jsx/index.js"],
    },
    output: {
        path: path.join(__dirname, generatedHtmlPath),
        filename: "main_bundle.js"
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'frontend/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
					loader: 'babel-loader',
					options:{
						presets:["@babel/preset-env", "@babel/preset-react" ],    // используемые плагины
                        plugins: [
                            ["@babel/plugin-transform-runtime",
                            {
                                "regenerator": true
                            }]
                        ]
					}
                }
                
            }
        ]
    }
};