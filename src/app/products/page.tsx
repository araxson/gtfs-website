"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, X, AlertCircle } from "lucide-react";
import { SearchFilter } from "@/components/search-filter";
import { ProductCategory, SearchResults } from "@/lib/types";

export default function ProductsPage() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check for URL search parameters on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function performSearch() {
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.set("query", searchQuery);
        if (sortBy) params.set("sort", sortBy);
        if (selectedApplications.length > 0) params.set("applications", selectedApplications.join(","));
        if (selectedTreatments.length > 0) params.set("treatments", selectedTreatments.join(","));

        const response = await fetch(`/api/search?${params.toString()}`);
        if (!response.ok) throw new Error("Search failed");
        const results = await response.json();
        setSearchResults(results);
      } catch (error) {
        console.error("Search failed:", error);
      }
    }

    if (searchQuery || selectedApplications.length > 0 || selectedTreatments.length > 0) {
      performSearch();
    } else {
      setSearchResults(null);
    }
  }, [searchQuery, sortBy, selectedApplications, selectedTreatments]);

  const clearFilters = () => {
    setSearchQuery("");
    setSortBy("");
    setSelectedApplications([]);
    setSelectedTreatments([]);
    setSearchResults(null);
  };

  const filteredCategories = searchResults ? 
    categories.filter(cat => searchResults.products.some(p => p.category === cat.slug)) :
    categories;


  if (isLoading) {
    return (
      <div className="page-background-muted">
      <PageContainer>
        <div className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
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
      </PageContainer>
      </div>
    );
  }

  return (
    <div className="page-background-muted">
      <PageContainer>
        <PageHeader
          title="Product Categories"
          description="Explore our comprehensive range of industrial filtration solutions designed for diverse applications and industries."
          breadcrumbs={[
            { title: "Products" }
          ]}
        />

        {/* Hero Image with proper spacing */}
        <section className="mb-10 sm:mb-12 lg:mb-16">
          <div className="aspect-[16/6] w-full overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/placeholder.svg"
              alt="Products hero"
              width={1600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

      {/* Filters Section */}
      <section className="section-primary content-section">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Filter Products</h3>
            <p className="text-sm text-muted-foreground">Refine your search to find the perfect filtration solution</p>
          </div>
          {(searchQuery || selectedApplications.length > 0 || selectedTreatments.length > 0) && (
            <Button variant="outline" onClick={clearFilters} size="sm">
              <X className="mr-2 h-4 w-4" />
              Clear All Filters
            </Button>
          )}
        </div>
        
        <Card>
          <CardContent>
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              selectedApplications={selectedApplications}
              onApplicationsChange={setSelectedApplications}
              selectedTreatments={selectedTreatments}
              onTreatmentsChange={setSelectedTreatments}
              availableApplications={searchResults?.filters.availableApplications || []}
              placeholder="Search products and categories..."
            />
          </CardContent>
        </Card>
      </div>
      </section>

      {/* Search Results or Categories */}
      <section className="section-secondary content-section-lg">
      {searchResults && searchResults.products.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Search Results ({searchResults.total} products found)
            </h2>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-1 h-3 w-3" />
              Show all categories
            </Button>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {searchResults.products.map((product) => (
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
                    <Badge variant="secondary" className="text-xs">
                      {product.productType}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-foreground">Applications</div>
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
        </div>
      )}

      {/* Categories Grid */}
      {(!searchResults || searchResults.products.length === 0) && (
        <div className="space-y-6">
          {searchResults && searchResults.products.length === 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="space-y-4">
                <div>
                  <h4 className="font-semibold">No products found</h4>
                  <p className="text-sm">
                    Try adjusting your search criteria or browse all categories below.
                  </p>
                </div>
                <Button onClick={clearFilters} size="sm">
                  Clear filters and view all categories
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {filteredCategories.map((category) => (
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
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">
                      {category.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm">
                      {category.products.length} Products
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  <CardDescription className="text-base leading-relaxed line-clamp-3">
                    {category.overview}
                  </CardDescription>
                  
                  {/* Key Features */}
                  {category.keyFeatures && category.keyFeatures.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-foreground">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {category.keyFeatures.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {category.keyFeatures.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.keyFeatures.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Common Applications */}
                  {category.commonApplications && category.commonApplications.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-foreground">Applications</div>
                      <div className="flex flex-wrap gap-2">
                        {category.commonApplications.slice(0, 2).map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {category.commonApplications.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.commonApplications.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href={`/products/${category.slug}`}>
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      </section>

      <Separator />
      
      {/* Industry Applications Section */}
      <section className="section-accent content-section-lg">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Industries We Serve</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Our filtration solutions are trusted across diverse industries for their reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            "Manufacturing", "Automotive", "Pharmaceutical", "Food Industry",
            "Chemical Processing", "Woodworking", "Metal Processing", "Electronics",
            "Aviation", "Power Generation", "Mining", "Construction"
          ].map((industry) => (
            <Card key={industry} className="text-center">
              <CardContent className="p-4">
                <div className="text-xs sm:text-sm font-medium">{industry}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </section>

      <Separator />
      
      {/* CTA Section */}
      <section className="content-section">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Need Help Finding the Right Filter?</CardTitle>
          <CardDescription className="text-sm sm:text-base max-w-lg mx-auto">
            Our technical experts can help you select the perfect filtration solution for your specific application and requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">
                Contact Technical Support
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/applications">
                Browse by Application
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      </section>
    </PageContainer>
    </div>
  );
}