module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Karla']
            },
            colors: {
                neutral: {
                    900: "#101010"
                }
            },
            dropShadow: {
                '2xl': '0 35px 35px rgba(0, 0, 0, 0.2)'
            }
        },
    },
    plugins: [],
}