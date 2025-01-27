import React, { useEffect } from 'react';

const ReviewsSection = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px' }}>
      <div className="elfsight-app-4dc8cc5c-5c74-46ca-9d63-b17dee7e2e6a" data-elfsight-app-lazy></div>
    </div>
  );
};

export default ReviewsSection;