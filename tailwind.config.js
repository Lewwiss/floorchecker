module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['Space Grotesk'],
                'sans': ['Euclid Circular A']
            },
            colors: {
                primary: "#4f46e5", //#0083ff   dark - #081131       bg light - #f8faff     old - #4f46e5
                customblack: "#020202",
                customebony: "#0a050c",
                customshark: "#1d1f21",
                custommamba: "#848285",
                customparchment: "#f2ead4",
                customconcrete: "#f3f3f3",
                customwhite: "#ffffff",
                customcandlelight: "#ffd512",
                customspringgreen: "#19fb9b",
                custombluechalk: "#e7e2fe",
                customheliotrope: "#f087ff",
                customelectricviolet: "#9945ff",
                customheliotrope: "#f087ff",
                custommediumspringgreen: "#14f195",
                customgray: "#bfbeba",
                customorange: "#ff623a",
                customblue: "#1fcff1",
                customgreen: "#1ffdc6",
                neutral: {
                    900: "#080808",
                    800: "#101010",
                    700: "#181818"
                },
                slate: {
                    900: "#100e14", //100e14 //15131b
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