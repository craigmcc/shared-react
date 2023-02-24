module.exports = {
    components: "src/**/[A-Z]*.tsx",
    ignore: ["**/*.test.tsx", "src/test/*.tsx"],
    propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
    }).parse,
    styleguideDir: "docs",
    template: {
        head: {
            links: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
                    integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
                    crossOrigin: "anonymous"
                },
            ]
        }
    },
    usageMode: "expand",
    webpackConfig: Object.assign({}, require("./webpack.config"), {}),
}
