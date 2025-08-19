import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { 
  ArrowRight, 
  Download,
  Share2,
  Settings,
  CheckCircle,
  Award,
  Shield,
  Zap,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Package,
  Wrench
} from "lucide-react";
import { getProduct, getCategory, getCategoryProducts } from "@/lib/data";
import { ProductPageProps } from "@/lib/types";

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug, resolvedParams.product);
  
  if (!product) {
    notFound();
  }

  const category = await getCategory(resolvedParams.slug);
  const relatedProducts = await getCategoryProducts(resolvedParams.slug);
  const otherProducts = relatedProducts.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <PageContainer>
      <PageHeader
        title={product.name}
        description={product.description}
        breadcrumbs={[
          { title: "Products", href: "/products" },
          { title: category?.name || "Category", href: `/products/${resolvedParams.slug}` },
          { title: product.name }
        ]}
      >
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Datasheet
          </Button>
          <Button size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </PageHeader>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Product Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images?.[0] || "/placeholder.svg"}
              alt={product.name}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Product Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-sm">
                {product.brand}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                {product.productType}
              </Badge>
              {product.model && (
                <Badge variant="outline" className="text-sm">
                  Model: {product.model}
                </Badge>
              )}
            </div>

            {/* Treatments/Features Badges */}
            {product.treatments && (
              <div className="flex flex-wrap gap-2">
                {product.treatments.antiStatic && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Anti-Static
                  </Badge>
                )}
                {product.treatments.ptfeMembrane && (
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="mr-1 h-3 w-3" />
                    PTFE Membrane
                  </Badge>
                )}
                {product.treatments.oilWaterRepellent && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Oil-Water Repellent
                  </Badge>
                )}
                {product.treatments.washable && (
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Washable
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Features */}
              {product.features && product.features.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-primary" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Advantages */}
              {product.advantages && product.advantages.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Special Features */}
              {product.specialFeatures && product.specialFeatures.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-primary" />
                      Special Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.specialFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="specifications" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Technical Specifications */}
                {product.technicalSpecs && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="mr-2 h-5 w-5 text-primary" />
                        Technical Specifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          {product.technicalSpecs.filtrationEfficiency && (
                            <TableRow>
                              <TableCell className="font-medium">Filtration Efficiency</TableCell>
                              <TableCell>{product.technicalSpecs.filtrationEfficiency}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.operatingTemperature && (
                            <TableRow>
                              <TableCell className="font-medium">Operating Temperature</TableCell>
                              <TableCell>{product.technicalSpecs.operatingTemperature}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.temperatureRange && (
                            <TableRow>
                              <TableCell className="font-medium">Temperature Range</TableCell>
                              <TableCell>{product.technicalSpecs.temperatureRange}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.surfaceResistance && (
                            <TableRow>
                              <TableCell className="font-medium">Surface Resistance</TableCell>
                              <TableCell>{product.technicalSpecs.surfaceResistance}</TableCell>
                            </TableRow>
                          )}
                          {product.technicalSpecs.filtrationSurface && (
                            <TableRow>
                              <TableCell className="font-medium">Filtration Surface</TableCell>
                              <TableCell>{product.technicalSpecs.filtrationSurface}</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}

                {/* Dimensions */}
                {product.dimensions && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Package className="mr-2 h-5 w-5 text-primary" />
                        Dimensions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          {product.dimensions.outerDiameter && (
                            <TableRow>
                              <TableCell className="font-medium">Outer Diameter</TableCell>
                              <TableCell>{product.dimensions.outerDiameter}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.innerDiameter && (
                            <TableRow>
                              <TableCell className="font-medium">Inner Diameter</TableCell>
                              <TableCell>{product.dimensions.innerDiameter}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.length && (
                            <TableRow>
                              <TableCell className="font-medium">Length</TableCell>
                              <TableCell>{product.dimensions.length}</TableCell>
                            </TableRow>
                          )}
                          {product.dimensions.height && (
                            <TableRow>
                              <TableCell className="font-medium">Height</TableCell>
                              <TableCell>{product.dimensions.height}</TableCell>
                            </TableRow>
                          )}
                          <TableRow>
                            <TableCell className="font-medium">Customizable</TableCell>
                            <TableCell>
                              {product.dimensions.customizable ? (
                                <Badge variant="secondary">Yes</Badge>
                              ) : (
                                <Badge variant="outline">Standard Only</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Materials */}
              {product.materials && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5 text-primary" />
                      Materials & Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.materials.filterMedia && (
                          <TableRow>
                            <TableCell className="font-medium">Filter Media</TableCell>
                            <TableCell>{product.materials.filterMedia}</TableCell>
                          </TableRow>
                        )}
                        {product.materials.endCap && (
                          <TableRow>
                            <TableCell className="font-medium">End Cap</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {Array.isArray(product.materials.endCap) 
                                  ? product.materials.endCap.map((cap) => (
                                      <Badge key={cap} variant="outline" className="text-xs">
                                        {cap}
                                      </Badge>
                                    ))
                                  : (
                                      <Badge variant="outline" className="text-xs">
                                        {product.materials.endCap}
                                      </Badge>
                                    )
                                }
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                        {product.materials.gasket && (
                          <TableRow>
                            <TableCell className="font-medium">Gasket</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {Array.isArray(product.materials.gasket) 
                                  ? product.materials.gasket.map((gasket) => (
                                      <Badge key={gasket} variant="outline" className="text-xs">
                                        {gasket}
                                      </Badge>
                                    ))
                                  : (
                                      <Badge variant="outline" className="text-xs">
                                        {product.materials.gasket}
                                      </Badge>
                                    )
                                }
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                        {product.materials.core && (
                          <TableRow>
                            <TableCell className="font-medium">Core</TableCell>
                            <TableCell>{product.materials.core}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {/* Available Sizes */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Available Sizes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Model</TableHead>
                          <TableHead>OD</TableHead>
                          <TableHead>ID</TableHead>
                          <TableHead>Length</TableHead>
                          <TableHead>Surface Area</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.availableSizes.map((size) => (
                          <TableRow key={size.model}>
                            <TableCell className="font-medium">{size.model}</TableCell>
                            <TableCell>{size.outerDiameter}</TableCell>
                            <TableCell>{size.innerDiameter}</TableCell>
                            <TableCell>{size.length}</TableCell>
                            <TableCell>{size.filtrationSurface}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-primary" />
                    Applications & Industries
                  </CardTitle>
                  <CardDescription>
                    This product is suitable for the following applications and industries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {product.applications.map((application) => (
                      <div
                        key={application}
                        className="p-3 rounded-lg border bg-card hover:bg-accent"
                      >
                        <div className="text-sm font-medium">{application}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customization Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Customization Options</CardTitle>
                    <CardDescription>
                      Available customization options for specific requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.customizationOptions.map((option, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-primary" />
                        Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.certifications.map((cert) => (
                          <div key={cert} className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="font-medium">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

              </div>

              {/* Documentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    Documentation & Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Product Datasheet
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Technical Specifications
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Installation Guide
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Certification Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <Card>
            <CardHeader>
              <CardTitle>Get a Quote</CardTitle>
              <CardDescription>
                Contact our experts for pricing and technical support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request Quote
              </Button>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Technical Support
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Email Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Product Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Product Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <span className="text-sm font-medium">{product.brand}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Product Type</span>
                  <span className="text-sm font-medium">{product.productType}</span>
                </div>
                {product.model && (
                  <>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Model</span>
                      <span className="text-sm font-medium">{product.model}</span>
                    </div>
                  </>
                )}
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="text-sm font-medium">{category?.name}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applications</span>
                  <span className="text-sm font-medium">{product.applications.length}+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          {otherProducts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Products</CardTitle>
                <CardDescription>
                  Other products in this category
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {otherProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={relatedProduct.images?.[0] || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${resolvedParams?.slug}/${relatedProduct.id}`}
                          className="text-sm font-medium hover:text-primary line-clamp-2"
                        >
                          {relatedProduct.name}
                        </Link>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {relatedProduct.description}
                        </p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/products/${resolvedParams.slug}`}>
                    View All Products <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const { getCategories, getCategoryProducts } = await import("@/lib/data");
    const categories = await getCategories();
    const params = [];
    
    for (const category of categories) {
      try {
        const products = await getCategoryProducts(category.slug);
        for (const product of products) {
          params.push({
            slug: category.slug,
            product: product.id,
          });
        }
      } catch (error) {
        console.warn(`Error loading products for category ${category.slug}:`, error);
        continue;
      }
    }
    
    console.log(`Generated ${params.length} product static params`);
    return params;
  } catch (error) {
    console.error("Error generating static params for products:", error);
    return [];
  }
}

// Enable dynamic rendering for missing products
export const dynamicParams = true;