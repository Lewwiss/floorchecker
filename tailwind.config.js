module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['JetBrains Mono']
            },
            colors: {
                primary: "#4f46e5",
                neutral: {
                    900: "#080808",
                    800: "#101010",
                    700: "#181818"
                },
                slate: {
                    900: "#15131b",
                    800: "#1b1921",
                    700: "#24222a",
                    600: "#6a667c",
                    500: "#8d8b93"
                }
            },
            dropShadow: {
                '2xl': '0 35px 35px rgba(0, 0, 0, 0.1)'
            }
        },
    },
    plugins: [],
}