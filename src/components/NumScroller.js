// NumScroller.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../styles/NumScroller.css';

const NumScroller = ({ maxCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = 50;

    let timerId;

    const startScroller = () => {
      timerId = setInterval(() => {
        setCount((prevCount) => Math.min(maxCount, prevCount + 3));
      }, interval);
    };

    startScroller();

    return () => {
      clearInterval(timerId);
    };
  }, [maxCount]); // Include maxCount in the dependency array to update when it changes

  return <div className="numscroller">{count}+</div>;
};

NumScroller.propTypes = {
  maxCount: PropTypes.number.isRequired, // Validate maxCount as a required number prop
};

export default NumScroller;
