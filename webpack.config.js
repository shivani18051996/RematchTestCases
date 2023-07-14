const path = require("path");

module.exports = {
  entry: "./src/index.js", // Path to your application's entry file
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply loaders to JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling
        },
      },
      {
        test: /\.css$/, // Apply loaders to CSS files
        use: ["style-loader", "css-loader"],
      },
      // Add more loaders for other file types (e.g., CSS, images) as needed
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx extensions
  },
};
