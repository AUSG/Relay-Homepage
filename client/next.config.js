require("dotenv-safe").config();

const nextEnv = require("next-env");

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  webpack(config, { isServer, buildId }) {
    config.resolve.modules.push(__dirname);
    return config;
  },
});
