import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { 
  Award, 
  Users, 
  Building, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  Target,
  Eye,
  Heart,
  Calendar
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Global Tech Fluid Services | Industrial Filtration & Pumps",
  description: "Learn about Global Tech Fluid Services, a leading provider of industrial filtration and pump solutions. Discover our mission, values, certifications, and commitment to delivering efficient and durable systems worldwide.",
  keywords: "about global tech fluid services, industrial filtration company, industrial pumps, pump solutions, company mission values, ISO certified filtration, ATEX compliance",
  openGraph: {
    title: "About Global Tech Fluid Services - Filtration & Pump Solutions",
    description: "Discover our commitment to excellence in industrial filtration and pumping solutions with ISO certification and global reach.",
    type: "website",
  }
};

import { getCompanyInfo, getCompanyAdvantages } from "@/lib/data";

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo();
  const advantages = await getCompanyAdvantages();

  return (
    <div className="page-background-muted">
      <PageContainer>
        <PageHeader
          title="About Global Tech Fluid Services"
          description="Leading provider of industrial filtration and pump solutions with a commitment to excellence, innovation, and environmental protection."
          breadcrumbs={[
            { title: "About" }
          ]}
        />

        {/* Company Overview */}
        <section className="section-primary content-section-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {companyInfo.mission}
                </p>
                <p className="text-muted-foreground">
                  Founded with a vision to provide superior filtration solutions, Global Tech Fluid Services has 
                  grown to become a trusted partner for industries worldwide. Our commitment to quality, innovation, 
                  and customer satisfaction drives everything we do.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="font-medium">Advanced Manufacturing Facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">ISO 9001 Certified Quality Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Global Market Presence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Expert Technical Team</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Image
                  src="/gtfs-logo.png"
                  alt="Global Tech Fluid Services Manufacturing"
                  width={500}
                  height={400}
                  className="object-contain max-w-full max-h-full"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-secondary content-section-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver efficient and durable filtration solutions with advanced production 
                  technology and stringent quality control, committed to enhancing industrial 
                  cleanliness and environmental protection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the global leader in industrial filtration technology, setting new standards 
                  for quality, innovation, and environmental responsibility while enabling our customers 
                  to achieve operational excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Customer First</div>
                  <div>• Quality Oriented</div>
                  <div>• Continuous Improvement</div>
                  <div>• Shared Value</div>
                  <div>• Environmental Responsibility</div>
                  <div>• Innovation Excellence</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Advantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the filtration industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const icons = [Shield, Zap, Globe];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={advantage.title}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Statistics */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Our Impact</CardTitle>
            <CardDescription className="text-lg">
              Numbers that reflect our commitment to excellence and growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Maximum Filtration Efficiency</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Industrial Applications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Technical Support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meeting and exceeding international standards for quality and safety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001", description: "Quality Management System", icon: Award },
              { name: "ATEX", description: "Explosive Atmospheres Compliance", icon: Shield },
              { name: "OEM Standards", description: "Original Equipment Manufacturer", icon: CheckCircle },
              { name: "CE Marking", description: "European Conformity", icon: Globe }
            ].map((cert) => {
              const Icon = cert.icon;
              return (
                <Card key={cert.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted filtration solutions across diverse industrial sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Manufacturing", "Automotive", "Pharmaceutical", "Food Processing",
              "Chemical Processing", "Woodworking", "Metal Processing", "Electronics",
              "Aviation", "Power Generation", "Mining", "Construction",
              "Textiles", "Welding", "Foundry", "Cement"
            ].map((industry) => (
              <Card key={industry} className="text-center">
                <CardContent className="p-4">
                  <div className="text-sm font-medium">{industry}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and development.
            </p>
          </div>
          
          <div className="grid gap-6">
            {[
              {
                year: "Founded",
                title: "Company Establishment",
                description: "Started with a vision to provide superior industrial filtration solutions."
              },
              {
                year: "Expansion",
                title: "Product Line Growth",
                description: "Expanded to offer comprehensive range of filter cartridges and dust collection systems."
              },
              {
                year: "Certification",
                title: "ISO 9001 Certification",
                description: "Achieved ISO 9001 certification, reinforcing our commitment to quality management."
              },
              {
                year: "Innovation",
                title: "Advanced Technology Integration",
                description: "Implemented cutting-edge manufacturing technologies and quality control systems."
              },
              {
                year: "Global Reach",
                title: "International Expansion",
                description: "Extended our services globally while maintaining local expertise and support."
              }
            ].map((milestone, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Discover how our expertise and quality products can improve your industrial filtration systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}