const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http//192.168.0.105:8080/',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/api':''}
    }
];
module.exports = PROXY_CONFIG;