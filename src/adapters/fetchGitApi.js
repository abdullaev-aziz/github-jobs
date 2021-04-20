export default async function fetchGitApi(url) {
    const res = await fetch(url)
    const jobsArray = await res.json();
    return jobsArray;
}