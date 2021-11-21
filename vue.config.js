module.exports = {
    parallel: false,  // disable thread-loader, which is not compactible with this plugin
    chainWebpack: config => {
        // disable type check and let `vue-tsc` handles it
        config.plugins.delete('fork-ts-checker')
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compiler = require('vue-template-babel-compiler')
                return options
            })
    },
    configureWebpack: {
        plugins: [
            require('unplugin-vue2-script-setup/webpack')({ /* options */ }),
        ],
    },
}
