module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/digital-resume-v2.0/' : '/',
    
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      hot: true,
      liveReload: true,
      watchOptions: {
        poll: 1000, // Enable polling for Docker compatibility
        aggregateTimeout: 300,
        ignored: /node_modules/
      },
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    },

    configureWebpack: {
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/
      }
    }
  };
  