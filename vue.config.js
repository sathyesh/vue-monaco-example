const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['json', 'javascript', 'typescript', 'html', 'xml', 'css', 'c', 'cpp'],
      },
    ]);
  },
};
