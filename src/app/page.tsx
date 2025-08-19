import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { PageContainer } from "@/components/page-container";
import { ArrowRight, CheckCircle, Shield, Globe, Users, Award, Settings } from "lucide-react";
import { getGTFSData, getFeaturedProducts } from "@/lib/data";

export default async function Home() {
  const gtfsData = await getGTFSData();
  const featuredProducts = await getFeaturedProducts(6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section py-12 lg:py-24">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Industrial Filtration & Pump Solutions
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  {gtfsData.company.tagline}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  {gtfsData.company.mission}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button size="lg" asChild className="text-lg font-medium px-8 shadow-xs hover:shadow-xs transition-shadow">
                  <Link href="/products">
                    Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg font-medium px-8 border hover:shadow-xs transition-shadow">
                  <Link href="/contact">
                    Get Quote
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <Card className="text-center hover:shadow-xs transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground mt-1">Filtration Efficiency</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xs transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground mt-1">Product Categories</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xs transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground mt-1">Applications</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xs transition-shadow p-0">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Hero image placeholder"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Company Advantages */}
      <section className="section-secondary py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Global Tech Fluid Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence drives everything we do, from manufacturing filtration and pump systems to customer service.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gtfsData.advantages?.map((advantage, index) => {
              const icons = [Shield, Settings, Globe];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={advantage.title} className="text-center h-full hover:shadow-xs transition-shadow duration-200">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Product Categories */}
      <section className="section-primary py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Product Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of industrial filtration and pumping solutions for diverse applications
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gtfsData.categories.slice(0, 6).map((category) => (
              <Card key={category.id} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  {/* Category Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={category.categoryImage || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <CardDescription className="text-base leading-relaxed flex-1">
                    {category.overview}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Badge variant="secondary" className="text-sm">
                      {category.products.length} Products
                    </Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${category.slug}`}>
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="shadow-xs hover:shadow-xs transition-all">
              <Link href="/products">
                View All Categories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* Featured Products */}
      <section className="section-accent py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most popular and advanced filtration and pumping solutions
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="h-full flex flex-col hover:shadow-xs transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  {/* Product Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={product.images?.[0] || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{product.brand}</Badge>
                    {product.treatments?.antiStatic && (
                      <Badge variant="secondary">Anti-Static</Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed line-clamp-3">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-foreground">Key Applications</div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                      {product.applications.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.applications.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.category}/${product.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="section-secondary py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Quality Standards & Certifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meeting the highest industry standards with certified quality processes
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="hover:shadow-xs transition-shadow duration-200">
              <CardHeader className="space-y-4">
                <CardTitle className="flex items-center text-2xl">
                  <Award className="mr-3 h-6 w-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gtfsData.certifications?.map((cert) => (
                    <div key={cert} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xs transition-shadow duration-200">
              <CardHeader className="space-y-4">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  Quality Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gtfsData.qualityStandards?.slice(0, 4).map((standard) => (
                    <div key={standard} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 mb-8 lg:mb-12">
        <PageContainer>
          <Card className="max-w-7xl mx-auto bg-primary text-primary-foreground border-0">
            <CardContent className="py-12 lg:py-16 px-6 lg:px-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Ready to Find Your Filtration Solution?
                </h2>
                <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Contact our experts today to discuss your specific filtration needs and get a customized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" variant="outline" asChild className="text-lg font-medium px-8 shadow-xs hover:shadow-xs transition-shadow bg-background text-foreground border-background hover:bg-background/90">
                    <Link href="/contact">
                      Get Custom Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg font-medium px-8 border hover:shadow-xs transition-shadow bg-transparent text-background border-background hover:bg-background/10">
                    <Link href="/products">
                      Browse Catalog
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContainer>
      </section>
    </div>
  );
}
