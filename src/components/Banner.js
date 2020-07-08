import React from 'react';

const Banner = () => {
  return (
    <p className="phase-banner">
      <span className="phase-banner__tag">
        <span className="tag tag--impact tag--alpha">Alpha</span>
      </span>
      <span className="phase-banner__label">
        We are testing this out. Found an problem or got a change request? See <a href={process.env.REACT_APP_GITHUB_URL}>GitHub</a>.
      </span>
    </p>
  );
};

export default Banner;