module.exports = {
    //...
    baseUrl: './',
    chainWebpack:  config => {
        config.entry('index').add('babel-polyfill')
    }    
    //...
}