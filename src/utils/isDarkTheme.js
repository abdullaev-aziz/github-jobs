export default function isDarkTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
}