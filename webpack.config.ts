import path from 'path';
import webpack from 'webpack';

export const productionConfig: webpack.Configuration = {
    entry: {
        main: './static.ts',
        // reducer:'./src/redux/reducer',
        // state:'./src/redux/state'
    },
    mode: 'production',
    devtool: 'source-map',
    target: 'node14.15',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript',

                            ],
                            plugins: [
                                ["@babel/plugin-transform-runtime"],
                                ['@babel/plugin-proposal-decorators', {legacy: true}],
                                ['@babel/plugin-proposal-class-properties', {loose: true}],
                            ],
                        },
                    },
                ],
            },
        ]
    },
    output: {
        // 改成了chunk命名，避免出现0123这种
        filename: 'index.js',
        path: path.resolve(__dirname),
    },
    // resolve: {
    //     fallback: {
    //         "crypto": false,
    //         "url": false,
    //         "path": false,
    //         "stream": false
    //     }
    // },
};


export default productionConfig;
