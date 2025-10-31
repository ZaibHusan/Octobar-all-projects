const calculateViews = (e) => {
  if (e >= 1000000000) {
    return `${Math.floor(e / 1000000000)}B`;
  } else if (e >= 1000000) {
    return `${Math.floor(e / 1000000)}M`;
  } else if (e >= 1000) {
    return `${Math.floor(e / 1000)}K`;
  } else {
    return `${e}`;
  }
};

export default calculateViews;
