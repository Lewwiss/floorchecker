module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Euclid Circular A']
            },
            padding: {
                "4.5": "1.125rem"
            },
            inset: {
                "4.5": "1.125rem"
            },
            colors: {
                primary: "#4f46e5"
            },
        },
    },
    plugins: [],
}