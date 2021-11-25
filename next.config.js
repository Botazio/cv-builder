module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "/_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
};

