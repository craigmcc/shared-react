module.exports = {
    components: "src/**/[A-Z]*.tsx",
    ignore: ["**/*.test.tsx", "src/test/*.tsx"],
    propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
    }).parse,
    styleguideDir: "docs",
    webpackConfig: Object.assign({}, require("./webpack.config"), {}),
}
