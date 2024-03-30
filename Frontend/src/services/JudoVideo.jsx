/** @format */

import React from 'react';

const JudoVideo = () => {
  return (
    <div>
      {/* Adjust width and height as per your requirement */}
      <iframe
        width="560" // Specify the width of the iframe
        height="315" // Specify the height of the iframe
        src="https://www.youtube.com/embed/_TzIO1mzbsE?start=53"
        title="Top 20 Ippons of Ono Shohei 大野将平"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default JudoVideo;
