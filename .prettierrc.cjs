module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    trailingComma: 'none',
    tabWidth: 4,
    semi: false,
    singleQuote: true
}
