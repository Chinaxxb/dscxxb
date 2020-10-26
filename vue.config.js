module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: "9529",
        open: true,
        proxy: {
            "/api": {
                // target: "http://localhost:3000/api/",
                target: "http://dsc.shopfw.com/api/",
                chnageOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },

        }
    }
}