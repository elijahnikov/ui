const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },
            colors: {
                brand: "#000101",
                primary: {
                    lightest: "#E7E7FF",
                    lighter: "#C6C4FF",
                    light: "#9990FF",
                    base: "#6B4EFF",
                    dark: "#5538EE",
                    darker: "#4830c2",
                },
                sky: {
                    lightest: "#F7F9FA",
                    lighter: "#F2F4F5",
                    light: "#E3E5E5",
                    base: "#CDCFD0",
                    dark: "#979C9E",
                },
                ink: {
                    lighter: "#72777A",
                    light: "#6C7072",
                    base: "#404446",
                    dark: "#303437",
                    darker: "#202325",
                    darkest: "#090A0A",
                },
            },
            borderRadius: {
                md: "0.25rem",
            },
            boxShadow: {
                button: "0 0.0625rem 0 rgba(0,0,0,.05)",
            },
        },
    },
    plugins: [],
};
