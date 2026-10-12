const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
          // systemvars lets the build read variables set in the Netlify UI.
          // Without it dotenv-webpack only reads the file below, which is
          // gitignored and therefore absent on CI — REACT_APP_SUPABASE_* then
          // inlined as undefined and the app failed to mount.
          // silent stops a missing file from failing the build.
          new Dotenv({
            path: './prod.env',
            systemvars: true,
            silent: true
          })
        ]
});
