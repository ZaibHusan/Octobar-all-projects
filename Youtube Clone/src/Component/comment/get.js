function get(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diff = (now - past) / 1000; // difference in seconds

  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 2592000) { // 30 days
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff < 31536000) { // 12 months
    return `${Math.floor(diff / 2592000)} months ago`;
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

export default get