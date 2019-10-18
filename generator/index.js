module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "zingchart-vue": "^1.0.1",
      "zinggrid": "^1.1.1"
    },
  });

  api.render('./template');

}