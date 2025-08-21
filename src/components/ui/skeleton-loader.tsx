import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkeletonLoaderProps {
  type?: 'page-header' | 'product-grid' | 'product-card' | 'category-grid' | 'search-results' | 'content-blocks' | 'hero-carousel' | 'contact-form' | 'product-detail' | 'category-page' | 'home-page' | 'contact-page' | 'product-detail-page';
  count?: number;
  className?: string;
}

export function SkeletonLoader({ 
  type = 'content-blocks', 
  count = 6, 
  className = "" 
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'page-header':
        return (
          <div className="pt-6 sm:pt-8 lg:pt-12">
            <div className="hero-section rounded-lg border border-border px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="min-w-0">
                  <Skeleton className="h-12 w-64 mb-2" />
                  <Skeleton className="h-6 w-96" />
                </div>
                <div className="shrink-0 flex gap-2">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-28" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'hero-carousel':
        return (
          <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
            <div className="absolute inset-0 bg-muted animate-pulse">
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl">
                    <Skeleton className="h-16 w-80 mb-6" />
                    <Skeleton className="h-6 w-96 mb-8" />
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Skeleton className="h-12 w-40" />
                      <Skeleton className="h-12 w-36" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'product-grid':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: count }).map((_, i) => (
              <Card key={i} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  {/* Product Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-32" />
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-18" />
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'product-card':
        return (
          <Card className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
            <CardHeader className="space-y-4">
              {/* Product Image */}
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-24" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-6">
              <div className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-18" />
                </div>
              </div>
              <div className="mt-auto pt-4 border-t">
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        );

      case 'category-grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: count }).map((_, i) => (
              <Card key={i} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  {/* Category Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-9 w-32" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'search-results':
        return (
          <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 border rounded-lg">
                <Skeleton className="h-12 w-12 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        );

      case 'contact-form':
        return (
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <Card className="hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-5 w-80" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-32 w-full" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-5 w-48" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Skeleton className="h-5 w-5 mt-1" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'product-detail':
        return (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Product Image Gallery */}
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                <Skeleton className="h-full w-full" />
              </div>
              
              {/* Product Overview */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-28" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-28" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-6">
                <div className="grid w-full grid-cols-4 gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Skeleton className="h-4 w-4 mt-0.5" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-48" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'category-page':
        return (
          <div className="space-y-8">
            {/* Hero Image */}
            <section className="mb-10 sm:mb-12 lg:mb-16">
              <div className="aspect-[16/6] w-full overflow-hidden rounded-xl border bg-muted">
                <Skeleton className="h-full w-full" />
              </div>
            </section>

            {/* Category Info Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <Skeleton className="h-6 w-32 mb-3" />
                  <div className="grid md:grid-cols-2 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Skeleton className="h-4 w-4 mt-0.5" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))}
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Products Grid */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: count }).map((_, i) => (
                  <Card key={i} className="group h-full flex flex-col hover:shadow-xs transition-shadow">
                    <CardHeader>
                      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-4">
                        <Skeleton className="h-full w-full" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-20" />
                        <div className="flex space-x-1">
                          <Skeleton className="h-6 w-16" />
                          <Skeleton className="h-6 w-18" />
                        </div>
                      </div>
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <div className="flex flex-wrap gap-1">
                          <Skeleton className="h-6 w-16" />
                          <Skeleton className="h-6 w-20" />
                          <Skeleton className="h-6 w-18" />
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'home-page':
        return (
          <div className="flex flex-col">
            {/* Hero Carousel Section */}
            <HeroCarouselSkeleton />

            {/* Company Advantages */}
            <section className="section-secondary py-12 lg:py-16">
              <div className="text-center space-y-4 mb-8 sm:mb-12">
                <div className="space-y-3">
                  <Skeleton className="h-12 w-96 mx-auto" />
                  <Skeleton className="h-6 w-[32rem] mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i} className="text-center h-full hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <Skeleton className="h-8 w-8" />
                      </div>
                      <Skeleton className="h-8 w-32 mx-auto" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mx-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Product Categories */}
            <section className="section-primary py-12 lg:py-16">
              <div className="text-center space-y-4 mb-8 sm:mb-12">
                <div className="space-y-3">
                  <Skeleton className="h-12 w-80 mx-auto" />
                  <Skeleton className="h-6 w-[28rem] mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                        <Skeleton className="h-full w-full" />
                      </div>
                      <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-6">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex items-center justify-between pt-4 border-t">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-9 w-32" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Skeleton className="h-12 w-48 mx-auto" />
              </div>
            </section>

            {/* Featured Products */}
            <section className="section-accent py-12 lg:py-16">
              <div className="text-center space-y-4 mb-8 sm:mb-12">
                <div className="space-y-3">
                  <Skeleton className="h-12 w-64 mx-auto" />
                  <Skeleton className="h-6 w-[24rem] mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                        <Skeleton className="h-full w-full" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                      <div className="space-y-3">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-6">
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-32" />
                        <div className="flex flex-wrap gap-2">
                          <Skeleton className="h-6 w-16" />
                          <Skeleton className="h-6 w-20" />
                          <Skeleton className="h-6 w-18" />
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t">
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quality Standards & Certifications */}
            <section className="section-secondary py-12 lg:py-16">
              <div className="text-center space-y-4 mb-8 sm:mb-12">
                <div className="space-y-3">
                  <Skeleton className="h-12 w-80 mx-auto" />
                  <Skeleton className="h-6 w-[28rem] mx-auto" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <Card className="hover:shadow-xs transition-shadow duration-200">
                  <CardHeader className="space-y-4">
                    <Skeleton className="h-8 w-40" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                          <Skeleton className="h-5 w-5" />
                          <Skeleton className="h-4 w-32" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-xs transition-shadow duration-200">
                  <CardHeader className="space-y-4">
                    <Skeleton className="h-8 w-36" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                          <Skeleton className="h-5 w-5 mt-0.5" />
                          <Skeleton className="h-4 w-40" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-16 mb-8 lg:mb-12">
              <Card className="max-w-7xl mx-auto bg-muted border-0">
                <CardContent className="py-12 lg:py-16 px-6 lg:px-8">
                  <div className="text-center space-y-4">
                    <Skeleton className="h-10 w-80 mx-auto" />
                    <Skeleton className="h-6 w-[24rem] mx-auto" />
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Skeleton className="h-12 w-40" />
                      <Skeleton className="h-12 w-36" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        );

      case 'contact-page':
        return (
          <div className="page-background-muted">
            {/* Page Header */}
            <PageHeaderSkeleton />

            <section className="section-primary content-section-lg">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <Skeleton className="h-8 w-48" />
                      <Skeleton className="h-5 w-80" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-10 w-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-28" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-32 w-full" />
                        </div>
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <Card className="hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <Skeleton className="h-8 w-32" />
                      <Skeleton className="h-5 w-48" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <Skeleton className="h-5 w-5 mt-1" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-24" />
                              <Skeleton className="h-3 w-32" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <Skeleton className="h-8 w-48" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                            <Skeleton className="h-5 w-5 mt-0.5" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-destructive/20 bg-destructive/5 hover:shadow-xs transition-shadow duration-200">
                    <CardHeader className="space-y-4">
                      <Skeleton className="h-8 w-40" />
                      <Skeleton className="h-5 w-64" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 p-4 rounded-lg bg-destructive/10">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-4 w-56" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="section-secondary content-section-lg">
              <div className="space-y-8">
                <div className="text-center">
                  <Skeleton className="h-8 w-32 mx-auto mb-4" />
                  <Skeleton className="h-5 w-64 mx-auto" />
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="hover:shadow-xs transition-shadow duration-200">
                      <CardHeader className="space-y-4">
                        <Skeleton className="h-6 w-32" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div key={j} className="flex items-center space-x-2">
                              <Skeleton className="w-2 h-2 rounded-full" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                          ))}
                          <div className="text-xs text-muted-foreground mt-4 pt-3 border-t">
                            <Skeleton className="h-3 w-32" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'product-detail-page':
        return (
          <div className="space-y-8">
            {/* Page Header */}
            <PageHeaderSkeleton />

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Product Image Gallery */}
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                  <Skeleton className="h-full w-full" />
                </div>
                
                {/* Product Overview */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-28" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-28" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className="space-y-6">
                  <div className="grid w-full grid-cols-4 gap-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <Skeleton className="h-6 w-32" />
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <Skeleton className="h-4 w-4 mt-0.5" />
                              <Skeleton className="h-4 w-32" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Skeleton className="h-6 w-28" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <Skeleton className="h-4 w-4 mt-0.5" />
                              <Skeleton className="h-4 w-40" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Skeleton className="h-6 w-36" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <Skeleton className="h-4 w-4 mt-0.5" />
                              <Skeleton className="h-4 w-36" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                            <Skeleton className="w-full h-full" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-40" />
                          </div>
                        </div>
                        <Skeleton className="h-px w-full" />
                      </div>
                    ))}
                    <Skeleton className="h-9 w-full" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'content-blocks':
      default:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Skeleton className="h-12 w-64" />
              <Skeleton className="h-6 w-96" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {Array.from({ length: count }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {renderSkeleton()}
    </div>
  );
}

// Specific skeleton components for common use cases
export function PageHeaderSkeleton() {
  return <SkeletonLoader type="page-header" />;
}

export function HeroCarouselSkeleton() {
  return <SkeletonLoader type="hero-carousel" />;
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="product-grid" count={count} />;
}

export function CategoryGridSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="category-grid" count={count} />;
}

export function SearchResultsSkeleton({ count = 5 }: { count?: number }) {
  return <SkeletonLoader type="search-results" count={count} />;
}

export function ContactFormSkeleton() {
  return <SkeletonLoader type="contact-form" />;
}

export function ProductDetailSkeleton() {
  return <SkeletonLoader type="product-detail" />;
}

export function CategoryPageSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="category-page" count={count} />;
}

export function HomePageSkeleton() {
  return <SkeletonLoader type="home-page" />;
}

export function ContactPageSkeleton() {
  return <SkeletonLoader type="contact-page" />;
}

export function ProductDetailPageSkeleton() {
  return <SkeletonLoader type="product-detail-page" />;
}

export function ContentBlocksSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="content-blocks" count={count} />;
}

