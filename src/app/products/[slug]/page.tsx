"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { 
  ArrowRight,
  Thermometer, 
  Gauge, 
  Settings,
  CheckCircle,
  Info
} from "lucide-react";
import { SearchFilter } from "@/components/search-filter";
import { CategoryPageProps, ProductCategory, Product } from "@/lib/types";
import { ContentBlocksSkeleton } from "@/components/ui/skeleton-loader";

export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolved = await params;
      setResolvedParams(resolved);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    async function loadCategoryData() {
      if (!resolvedParams) return;
      
      try {
        const response = await fetch(`/api/categories/${resolvedParams.slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            notFound();
          }
          throw new Error("Failed to fetch category data");
        }
        
        const data = await response.json();
        setCategory(data.category);
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Failed to load category data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadCategoryData();
  }, [resolvedParams]);

  useEffect(() => {
    let filtered = [...products];

    // Text search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.productType.toLowerCase().includes(query) ||
        product.applications.some(app => app.toLowerCase().includes(query)) ||
        product.features?.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Application filter
    if (selectedApplications.length > 0) {
      filtered = filtered.filter(product =>
        product.applications.some(app =>
          selectedApplications.some(filterApp =>
            app.toLowerCase().includes(filterApp.toLowerCase())
          )
        )
      );
    }

    // Treatment filter
    if (selectedTreatments.length > 0) {
      filtered = filtered.filter(product => {
        if (!product.treatments) return false;
        
        return selectedTreatments.some(treatment => {
          switch (treatment) {
            case 'anti-static':
              return product.treatments!.antiStatic;
            case 'oil-water-repellent':
              return product.treatments!.oilWaterRepellent;
            case 'ptfe-membrane':
              return product.treatments!.ptfeMembrane;
            case 'fire-retardant':
              return product.treatments!.fireRetardant;
            case 'washable':
              return product.treatments!.washable;
            case 'conductive':
              return product.treatments!.conductive;
            default:
              return false;
          }
        });
      });
    }

    // Sort products
    if (sortBy) {
      switch (sortBy) {
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'efficiency':
          filtered.sort((a, b) => {
            const effA = parseFloat(a.technicalSpecs?.filtrationEfficiency?.replace(/[^\d.]/g, '') || '0');
            const effB = parseFloat(b.technicalSpecs?.filtrationEfficiency?.replace(/[^\d.]/g, '') || '0');
            return effB - effA;
          });
          break;
        case 'temperature':
          filtered.sort((a, b) => {
            const tempA = parseFloat(a.technicalSpecs?.operatingTemperature?.replace(/[^\d.]/g, '') || '0');
            const tempB = parseFloat(b.technicalSpecs?.operatingTemperature?.replace(/[^\d.]/g, '') || '0');
            return tempB - tempA;
          });
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, sortBy, selectedApplications, selectedTreatments]);

  const clearFilters = () => {
    setSearchQuery("");
    setSortBy("");
    setSelectedApplications([]);
    setSelectedTreatments([]);
  };

  const hasActiveFilters = searchQuery || selectedApplications.length > 0 || selectedTreatments.length > 0;

  // Get available filter options from current products
  const availableApplications = [...new Set(products.flatMap(p => p.applications))];

  if (isLoading) {
    return (
      <PageContainer>
        <ContentBlocksSkeleton count={6} />
      </PageContainer>
    );
  }

  if (!category) {
    notFound();
  }

  return (
    <PageContainer>
      <PageHeader
        title={category.name}
        description={category.overview}
        breadcrumbs={[
          { title: "Products", href: "/products" },
          { title: category.name }
        ]}
      />

      {/* Hero Image with proper spacing */}
      <section className="mb-10 sm:mb-12 lg:mb-16">
        <div className="aspect-[16/6] w-full overflow-hidden rounded-xl border bg-muted">
          <Image
            src={category?.categoryImage || "/placeholder.svg"}
            alt={`${category?.name || "Category"} hero`}
            width={1600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Category Info Section */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          {/* Key Features */}
          {category.keyFeatures && category.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {category.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Applications */}
          {category.commonApplications && category.commonApplications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Settings className="mr-2 h-5 w-5 text-primary" />
                Common Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.commonApplications.map((app) => (
                  <Badge key={app} variant="secondary">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Stats */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Category Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Products</span>
                  <span className="font-medium">{products.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Product Types</span>
                  <span className="font-medium">
                    {new Set(products.map(p => p.productType)).size}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applications</span>
                  <span className="font-medium">
                    {category.commonApplications?.length || 0}+
                  </span>
                </div>
              </div>
              
              <Button asChild className="w-full">
                <Link href="/contact">
                  Get Expert Consultation
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-1">Filter Products</h3>
          <p className="text-sm text-muted-foreground">Find the perfect filtration solution for your needs</p>
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
              availableApplications={availableApplications}
              placeholder="Search products..."
              onClearFilters={clearFilters}
            />
          </CardContent>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Products ({filteredProducts.length}{filteredProducts.length !== products.length ? ` of ${products.length}` : ''})
          </h2>
        </div>

        {filteredProducts.length === 0 && hasActiveFilters && (
          <div className="text-center py-8">
            <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or clear the filters.
            </p>
            <Button onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group h-full flex flex-col hover:shadow-xs transition-shadow">
              <CardHeader>
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-4">
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
                  <div className="flex space-x-1">
                    {product.treatments?.antiStatic && (
                      <Badge variant="secondary" className="text-xs">Anti-Static</Badge>
                    )}
                    {product.treatments?.ptfeMembrane && (
                      <Badge variant="secondary" className="text-xs">PTFE</Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                {/* Technical Specs */}
                {product.technicalSpecs && (
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Technical Specifications:</div>
                    <div className="space-y-1">
                      {product.technicalSpecs.filtrationEfficiency && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Gauge className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Efficiency:</span>
                          <span className="font-medium">{product.technicalSpecs.filtrationEfficiency}</span>
                        </div>
                      )}
                      {product.technicalSpecs.operatingTemperature && (
                        <div className="flex items-center space-x-2 text-sm">
                          <Thermometer className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Temperature:</span>
                          <span className="font-medium">{product.technicalSpecs.operatingTemperature}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Applications */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 3).map((app) => (
                      <Badge key={app} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                    {product.applications.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.applications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/products/${resolvedParams?.slug}/${product.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Products Found</h3>
            <p className="text-muted-foreground mb-4">
              There are currently no products in this category.
            </p>
            <Button asChild>
              <Link href="/products">
                Browse Other Categories
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Related Categories */}
      {products.length > 0 && (
        <div className="mt-16 mb-8 lg:mb-12 p-8 rounded-lg bg-muted/50">
          <h3 className="text-xl font-semibold mb-4">Need Something Different?</h3>
          <p className="text-muted-foreground mb-6">
            Explore our other product categories or contact our technical team for custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/products">
                Browse All Categories
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Request Custom Solution
              </Link>
            </Button>
          </div>
        </div>
      )}
    </PageContainer>
  );
}