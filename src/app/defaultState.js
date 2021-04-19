import isDarkTheme from "../utils/isDarkTheme";
import themes from "../styles/themes";

let currentTheme = {};
//figure out if dark mode is preferred
let isDark = false;
if (isDarkTheme()) {
  isDark = true;
  currentTheme = themes.darkTheme;
} else currentTheme = themes.lightTheme;

const defaultState = {
  isDark: isDark,
  currentTheme: currentTheme,
  description: {
    showDesc: false,
    descHtml: "",
    url: ''
  },
  jobs: [],
  showJobs: true,
  query: {
    search: "",
    page: 1,
    full_time: false,
    lat: "",
    long: "",
  },
  resultsPerPage: 12,
  resultsNow: 12,
};

export default defaultState;