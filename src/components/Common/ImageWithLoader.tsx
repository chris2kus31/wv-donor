import { Image, ImageProps } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const ImageWithLoader: React.FC<ImageProps> = ({ ...imageProps }) => {
  const { src: imageSrc, ...imageProperties }: ImageProps = imageProps;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (imageSrc) {
      setImageURL(imageSrc);
    }
  }, [imageSrc]);

  return (
    <SkeletonLoader
      isLoaded={isLoaded}
      borderRadius={imageProps.borderRadius ? imageProps.borderRadius : 0}
    >
      <Image
        {...imageProperties}
        src={imageURL}
        onLoad={() => setIsLoaded(true)}
        ignoreFallback
      />
    </SkeletonLoader>
  );
};

export default ImageWithLoader;
