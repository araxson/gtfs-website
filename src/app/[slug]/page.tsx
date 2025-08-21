"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { 
  ArrowRight,
  Thermometer, 
  Gauge, 
  Settings,
  CheckCircle,
  Info
} from "lucide-react";
import { CategoryPageProps, ProductCategory, Product } from "@/lib/types";
import { CategoryPageSkeleton } from "@/components/ui/skeleton-loader";

export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
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
      } catch (error) {
        console.error("Failed to load category data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadCategoryData();
  }, [resolvedParams]);

  if (isLoading) {
    return (
      <PageContainer>
        <CategoryPageSkeleton count={6} />
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
          <ImageWithFallback
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

      {/* Products Grid */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Products ({products.length})
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group h-full flex flex-col">
              <CardHeader>
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-4">
                  <ImageWithFallback
                    src={product.images?.[0] || category?.categoryImage || "/placeholder.svg"}
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
                    <Link href={`/${resolvedParams?.slug}/${product.id}`}>
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