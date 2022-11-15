module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lexend']
            },
            padding: {
                "4.5": "1.125rem"
            },
            inset: {
                "4.5": "1.125rem"
            },
            colors: {
                primary: "#000"
            },
        },
    },
    plugins: [],
}