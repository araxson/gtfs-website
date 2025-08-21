"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
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

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)] overflow-hidden">
      {/* Background Carousel */}
      <Carousel 
        setApi={setApi} 
        className="absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)]">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)] pl-0">
              <div className="relative h-full w-full">
                <ImageWithFallback
                  src={image}
                  alt={`Industrial filtration solution ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Enhanced gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>

      {/* Enhanced Static Content Overlay with Better Visibility */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            {/* Text container with backdrop blur for extra visibility */}
            <div className="bg-foreground/20 backdrop-blur-xs rounded-xl p-6 lg:p-8 border border-background/10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-background">
                <span>Professional</span>
                <span className="block text-primary filter brightness-110">Filtration & Pumping Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-background/90 leading-relaxed font-medium max-w-2xl">
                Advanced filtration technology for industrial applications. 
                Discover our comprehensive range of high-performance systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-4 backdrop-blur-sm bg-background/10">
                  <Link href="/contact">Get Consultation</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                <div className="flex items-center space-x-3 bg-background/10 backdrop-blur rounded-lg px-4 py-3 border border-background/20">
                  <div className="bg-primary/20 rounded-full p-2">
                    <Filter className="h-5 w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium">High Efficiency</span>
                </div>
                <div className="flex items-center space-x-3 bg-background/10 backdrop-blur rounded-lg px-4 py-3 border border-background/20">
                  <div className="bg-primary/20 rounded-full p-2">
                    <Shield className="h-5 w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium">Certified Quality</span>
                </div>
                <div className="flex items-center space-x-3 bg-background/10 backdrop-blur rounded-lg px-4 py-3 border border-background/20">
                  <div className="bg-primary/20 rounded-full p-2">
                    <Wrench className="h-5 w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-500 ease-out ${
              current === index 
                ? "w-10 h-4 bg-primary scale-110" 
                : "w-4 h-4 bg-background/60 hover:bg-background/80 hover:scale-105"
            } rounded-full backdrop-blur-sm border border-background/20`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}