const commonConfig =  require("./weback.config");
const { merge } = require("webpack-merge");

module.exports = merge( commonConfig, {
    mode: "production",
    performance: {
        hints: 'warning',
        maxAssetSize: 244 * 1024, // Set your desired size limit in bytes
    },
});