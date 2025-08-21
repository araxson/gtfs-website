"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Use fallback if no images or images array is empty
  const displayImages = images && images.length > 0 ? images : [fallbackImage];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <ImageWithFallback
          src={displayImages[selectedImageIndex]}
          alt={productName}
          width={800}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Thumbnail Images */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {displayImages.map((image, index) => (
            <div 
              key={index} 
              className={`aspect-square overflow-hidden rounded-md bg-muted cursor-pointer border-2 transition-all ${
                selectedImageIndex === index 
                  ? 'border-primary shadow-md' 
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <ImageWithFallback
                src={image}
                alt={`${productName} view ${index + 1}`}
                width={150}
                height={150}
                className="h-full w-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}