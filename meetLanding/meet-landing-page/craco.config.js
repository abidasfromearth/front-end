const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@feature': path.resolve(__dirname, 'src/feature'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
        configure: (webpackConfig) => {
            const imageRule = {
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'static/media/',
                        },
                    },
                    {
                        loader: require.resolve('webp-loader'),
                        options: {
                            quality: 85,
                        },
                    },
                ],
            }

            webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
                if (Array.isArray(rule.oneOf)) {
                    rule.oneOf = rule.oneOf.map((one) => {
                        if (one.test && one.test.toString().includes('png|jpe?g|gif')) {
                            return { ...one, exclude: /\.(png|jpe?g)$/i }
                        }
                        return one
                    })
                }
                return rule
            })

            const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf))
            if (oneOfRule) {
                oneOfRule.oneOf.unshift(imageRule)
            }

            return webpackConfig
        },
    },
}