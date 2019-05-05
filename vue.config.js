module.exports = {
     baseUrl: process.env.NODE_ENV === "production" ? "/" : "./",
    productionSourceMap: false,
    devServer: {
        proxy: 'http://115.47.126.124:8210'
    }
}