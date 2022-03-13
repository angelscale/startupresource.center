import React from 'react';
import { Helmet } from 'react-helmet';
import 'react-lazy-load-image-component/src/effects/opacity.css';
// import 'leaflet/dist/leaflet.css';
// import 'assets/css/ghost.css';
import 'assets/css/index.css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Connecting the dots on what you need for your Startup."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.startupresource.center/assets/images/social.png"
        />
        <meta property="og:title" content="Startup Resource Center" />
        <meta
          property="og:description"
          content="Connecting the dots on what you need for your Startup."
        />
        <meta property="og:url" content="https://www.startupresource.center/" />
        {/* <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {props.children}
    </React.Fragment>
  );
}
