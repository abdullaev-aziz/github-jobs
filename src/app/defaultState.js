/**
 * defaultState is an object for redux store
 * isDark - true if dark mode is default, false otherwise
 * showJobDescription, the job description is hidden unless a job card is clicked
 * jobs, array of jobs, fetched from GitHub Jobs API
 * jobsVisible, visible when description is hidden, otherwise hidden
 * currentJob, keeping track of currentJob, the object is sent to JobDescription component
 * queryURL - used to make a more specific query URL API request to GitHub Jobs API
 * resultsPerPage - pagination limit
 */

const defaultState = {
  isLoading: false,
  isDark: false,
  showJobDescription: false,
  jobs: [],
  jobsVisible: true,
  currentJob: {},
  queryURL: {
    search: "",
    location:"",
    page: 1,
    full_time: false,
    lat: "",
    long: "",
  },
  resultsPerPage: 12,
};

export default defaultState;
