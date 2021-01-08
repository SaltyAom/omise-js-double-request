const environment = require('./.env.json')

module.exports = {
    env: {
        ...environment
    },
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            react: 'preact/compat',
            'react-dom': 'preact/compat',
            'react-ssr-prepass': 'preact-ssr-prepass'
        }

        if (!options.isServer) {
            config.node = {
                net: 'empty',
                tls: 'empty'
            }
        }

        return config
    }
}
