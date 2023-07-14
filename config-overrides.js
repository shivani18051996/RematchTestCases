// const disableSourceMap = () => (config) => {
//   // Disable source map generation
//   config.devtool = false;

//   // Exclude source maps from the production build
//   if (config.optimization) {
//     config.optimization.minimizer.forEach((minimizer) => {
//       if (minimizer.constructor.name === "TerserPlugin") {
//         if (minimizer.options.sourceMap) {
//           minimizer.options.sourceMap = false;
//         }
//       }
//     });
//   }

//   return config;
// };

// module.exports = {
//   webpack: (config, env) => {
//     config = disableSourceMap()(config);
//     return config;
//   },
// };
