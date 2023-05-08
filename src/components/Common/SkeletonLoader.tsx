import { BorderProps, Skeleton } from "@chakra-ui/react";
import React from "react";

interface SkeletonLoaderProps {
  children: React.ReactNode;
  isLoaded: boolean;
  borderRadius: BorderProps["borderRadius"];
}

const SkeletonLoader = ({
  children,
  borderRadius,
  isLoaded = false,
}: SkeletonLoaderProps) => {
  return (
    <Skeleton isLoaded={isLoaded} borderRadius={borderRadius} flexShrink={0}>
      {children}
    </Skeleton>
  );
};

export default SkeletonLoader;
