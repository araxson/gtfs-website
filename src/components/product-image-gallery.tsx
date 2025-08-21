"use client";

import React, { useState, useMemo } from "react";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProductImageGalleryProps {
  images?: string[];
  productName: string;
  fallbackImage?: string;
}

export function ProductImageGallery({ 
  images, 
  productName, 
  fallbackImage = "/placeholder.svg" 
}: ProductImageGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Memoize displayImages to prevent unnecessary re-renders
  const displayImages = useMemo(() => {
    return images && images.length > 0 ? images : [fallbackImage];
  }, [images, fallbackImage]);

  // Set up carousel API effects
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {displayImages.map((image, index) => (
            <CarouselItem key={`${image}-${index}`}>
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted border border-border">
                <ImageWithFallback
                  src={image}
                  alt={`${productName} - Image ${index + 1} of ${displayImages.length}`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {displayImages.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>
      
      {/* Thumbnail Grid */}
      {displayImages.length > 1 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Product Images</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {displayImages.map((image, index) => (
              <button 
                key={`thumb-${image}-${index}`}
                type="button"
                className={`aspect-square overflow-hidden rounded-md bg-muted cursor-pointer border relative focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  current === index + 1
                    ? 'border-primary ring-2 ring-primary/20' 
                    : 'border-border hover:border-border'
                }`}
                onClick={() => scrollToSlide(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSlide(index);
                  }
                }}
                aria-label={`View image ${index + 1} of ${productName}`}
                aria-current={current === index + 1 ? 'true' : 'false'}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${productName} view ${index + 1}`}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
}