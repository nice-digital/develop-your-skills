import React from 'react';

const Banner = () => {
  return (
    <p className="phase-banner">
      <span className="phase-banner__tag">
        <span className="tag tag--impact tag--alpha">Alpha</span>
      </span>
      <span className="phase-banner__label">
        We are testing this out. Feedback by opening an issue in <a href="https://github.com/nice-digital/develop-your-skills/issues">GitHub</a>.
      </span>
    </p>
  );
};

export default Banner;