export default function getTimeAgo(currentDateStr, pastDateStr) {
  const curTimeInMs = Date.parse(currentDateStr);
  const pastTimeInMs = Date.parse(pastDateStr);

  //empty string if invalid data
  if (isNaN(curTimeInMs) || isNaN(pastTimeInMs)) return "";

  const minutesAgo = (curTimeInMs - pastTimeInMs) / 6E4;
  //minutes not exceeding 60
  if(minutesAgo < 60) return `${Math.trunc(minutesAgo)} mins ago`

  const hoursAgo = minutesAgo / 60;
  //hours not exceeding 24
  if (hoursAgo < 24) return `${Math.trunc(hoursAgo)}h ago`;

  const days = Math.trunc(hoursAgo / 24);
  // a year or more
  if (days > 364) return `${Math.trunc(days / 365)}y ago`;
  if (days > 30) return `${Math.trunc(days / 30)} months ago`;

  return `${days}d ago`;
}
