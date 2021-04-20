import colors from "./colors";
const lightTheme = {
  name: "lightTheme",
  styles: {
    App: { backgroundColor: colors.lightGray, color: colors.black },
    JobCard: { backgroundColor: colors.white, color: colors.black },
    JobDescription: { backgroundColor: colors.white, color: colors.black },
  },
};

const darkTheme = {
  name: "darkTheme",
  styles: {
    App: {
      backgroundColor: colors.darkBlue,
      color: colors.white,
    },
    JobCard: { backgroundColor: colors.lightBlue, color: colors.white },
    JobDescription: {
      backgroundColor: colors.lightBlue,
      color: colors.white,
    },
  },
};

export default {
  lightTheme,
  darkTheme,
};
