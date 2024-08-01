import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageComponent = ({ src, alt }) => (
  <LazyLoadImage
    alt={alt}
    src={src} // Use the image source provided
    effect="blur" // Apply blur effect while loading
    className="skill-image"
  />
);

export default ImageComponent;
