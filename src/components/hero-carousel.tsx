"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { ArrowRight, Filter, Shield, Wrench } from "lucide-react";

const heroImages = [
  "/products_images/product-catagories-images/metal-pleated-bag-filters.webp",
  "/products_images/product-catagories-images/polyester-air-filter-cartridge.webp",
  "/products_images/product-catagories-images/cartridge-dust-catcher.webp",
  "/products_images/product-catagories-images/dust-collector-system.webp",

];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Carousel */}
      <Carousel 
        setApi={setApi} 
        className="absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[70vh]">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-[70vh] pl-0">
              <div className="relative h-full w-full">
                <ImageWithFallback
                  src={image}
                  alt={`Industrial filtration solution ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Simplified overlay for better performance */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200 shadow-md" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200 shadow-md" />
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Streamlined text container */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                <span>Professional</span>
                <span className="block text-primary filter brightness-110">Filtration & Pumping Solutions</span>
              </h1>
              
              <p className="text-base md:text-lg mb-6 text-gray-100 leading-relaxed drop-shadow-md">
                Advanced filtration technology for industrial applications. 
                Discover our comprehensive range of high-performance systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90 shadow-lg">
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="default" className="border border-white text-white hover:bg-white hover:text-black shadow-lg backdrop-blur-sm bg-white/10">
                  <Link href="/contact">Get Consultation</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15">
                  <div className="bg-primary/20 rounded-full p-1.5">
                    <Filter className="h-4 w-4 text-primary filter brightness-125" />
                  </div>
                  <span className="text-white text-sm font-medium">High Efficiency</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15">
                  <div className="bg-primary/20 rounded-full p-1.5">
                    <Shield className="h-4 w-4 text-primary filter brightness-125" />
                  </div>
                  <span className="text-white text-sm font-medium">Certified Quality</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15">
                  <div className="bg-primary/20 rounded-full p-1.5">
                    <Wrench className="h-4 w-4 text-primary filter brightness-125" />
                  </div>
                  <span className="text-white text-sm font-medium">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-200 ${
              current === index 
                ? "w-6 h-2 bg-primary" 
                : "w-2 h-2 bg-white/60 hover:bg-white/80"
            } rounded-full backdrop-blur-sm border border-white/15`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}