# [GitHub Careers](https://gitpicasso.com)

## A React app utilizing  [GitHub Jobs API](https://jobs.github.com/api) and rendering jobs.
### Features:
- Showing jobs according to user's location
- Filtering jobs by title/company/location/job type
- Pagination of results (partial, work in progress)
- Client-side routing, dynamic routing for a specific job based on ID
- Dark theme support according to user's preferred scheme
- Spinner while loading data from the API
- Responsive design, using media queries
- Redux state management for better scaling and state bug tracking (might be an overkill for this app)
- Deployed on netlify with a custom domain
- Added lazy loading for several components


### Bugs:
- API CORS issues in local dev environment **solved: setting `proxy:https://jobs.github.com` in package.json**
- Netlify Deployment issues. Netlify continuosly failed to deploy an app with warnings in it. : **solved: setting `CI=false` as an env variable**
- API CORS issues in production environment on Netlify **solved: setting `[[redirects]]` in netlify.toml**
