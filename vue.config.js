module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/api': '' }
            },
            '/socketio/': {
                target: 'http://localhost:3000/',
                pathRewrite: { '^/socketio': '' }
            }
        }
    }
}