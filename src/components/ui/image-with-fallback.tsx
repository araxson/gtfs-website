"use client";

import Image from 'next/image';
import { useState } from 'react';

const PLACEHOLDER_IMAGE = "/placeholder.svg";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  sizes,
  priority = false,
  placeholder,
  blurDataURL,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className,
    onError: handleError,
    priority,
    ...(placeholder && { placeholder }),
    ...(blurDataURL && { blurDataURL }),
    ...(sizes && { sizes }),
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        alt={alt}
      />
    );
  }

  if (width && height) {
    return (
      <Image
        {...imageProps}
        width={width}
        height={height}
        alt={alt}
      />
    );
  }

  // Default dimensions if none provided
  return (
    <Image
      {...imageProps}
      width={400}
      height={300}
      alt={alt}
    />
  );
}

export { ImageWithFallback };
