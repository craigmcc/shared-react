module.exports = {
    components: "src/**/[A-Z]*.tsx",
    ignore: ["**/*.test.tsx", "src/test/*.tsx"],
    pagePerSection: true,
    propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
    }).parse,
    sections: [
        {
            components: [
                "src/**/AddButton/AddButton.tsx",
                "src/**/BackButton/BackButton.tsx",
                "src/**/EditButton/EditButton.tsx",
                "src/**/ForwardButton/ForwardButton.tsx",
                "src/**/TextButton/TextButton.tsx",
            ],
            description: "Individual buttons with icon contents.",
            name: "Buttons",
        },
        {
            components: [
                "src/**/CheckBoxField/CheckBoxField.tsx",
                "src/**/SelectField/SelectField.tsx",
                "src/**/TextField/TextField.tsx",
            ],
            description:  "Components for form fields using react-hook-form.",
            name: "Form Fields",
        },
        {
            components: [
                "src/**/Callout/Callout.tsx",
                "src/**/CheckBox/CheckBox.tsx",
                "src/**/FetchingProgress.tsx",
                "src/**/MutatingProgress.tsx",
                "src/**/Pagination.tsx",
                "src/**/SearchBar.tsx",
            ],
            description: "General purpose stand alone components.",
            name: "Other",
        },
    ],
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
