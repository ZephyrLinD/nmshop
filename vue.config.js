module.exports = {
    devServer:{
      host:'localhost',
      port:8080,
      proxy:{
        '/api':{
          target:'http://nmshop.zephyrl.co:8080/',
          changeOrigin:true,
          pathRewrite:{
            '/api':''
          }
        }
      }
    },
    // productionSourceMap: false,
    // chainWebpack:(config)=>{
    //   config.plugins.delete('prefetch')
    // }
  }