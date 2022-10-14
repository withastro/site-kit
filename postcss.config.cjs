module.exports = {
    plugins: {
        tailwindcss: {
            config: require('path').join(__dirname, 'tailwind.config.cjs') // update this if your path differs!
        },
        autoprefixer: {}
    }
}
