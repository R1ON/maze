module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};
