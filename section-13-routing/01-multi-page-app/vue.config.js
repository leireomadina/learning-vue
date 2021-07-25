// const webpack = require('webpack');
// process.env.VUE_APP_VERSION = require('./package.json').version;

// module.exports = {
//   configureWebpack: {
//     devServer: {
//       disableHostCheck: true,
//       watchOptions: {
//         poll: true,
//       },
//     },
//     plugins: [
//       new webpack.DefinePlugin({
//         'process.env': {
//           USERS_URL: JSON.stringify(`${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_HOST_CAREERTEAM_ID_SERVICE}:${process.env.VUE_APP_PORT_CAREERTEAM_ID_SERVICE}${process.env.VUE_APP_ROUTE_PREFIX}`),
//         },
//       }),
//     ],
//   },
// };