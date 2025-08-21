import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { 
  PageHeaderSkeleton,
  HeroCarouselSkeleton,
  ProductGridSkeleton,
  CategoryGridSkeleton,
  SearchResultsSkeleton,
  ContactFormSkeleton,
  ProductDetailSkeleton,
  CategoryPageSkeleton,
  HomePageSkeleton,
  ContactPageSkeleton,
  ProductDetailPageSkeleton,
  ContentBlocksSkeleton
} from "@/components/ui/skeleton-loader";

export default function SkeletonDemoPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Skeleton Components Demo"
        description="A showcase of all available skeleton components for loading states"
        breadcrumbs={[
          { title: "Skeleton Demo" }
        ]}
      />

      <div className="space-y-16">
        {/* Page Header Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Page Header Skeleton</h2>
          <PageHeaderSkeleton />
        </section>

        {/* Hero Carousel Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hero Carousel Skeleton</h2>
          <HeroCarouselSkeleton />
        </section>

        {/* Product Grid Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Grid Skeleton</h2>
          <ProductGridSkeleton count={3} />
        </section>

        {/* Category Grid Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Category Grid Skeleton</h2>
          <CategoryGridSkeleton count={3} />
        </section>

        {/* Search Results Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Search Results Skeleton</h2>
          <SearchResultsSkeleton count={3} />
        </section>

        {/* Contact Form Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Form Skeleton</h2>
          <ContactFormSkeleton />
        </section>

        {/* Product Detail Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Detail Skeleton</h2>
          <ProductDetailSkeleton />
        </section>

        {/* Category Page Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Category Page Skeleton</h2>
          <CategoryPageSkeleton count={3} />
        </section>

        {/* Home Page Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Home Page Skeleton</h2>
          <HomePageSkeleton />
        </section>

        {/* Contact Page Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Page Skeleton</h2>
          <ContactPageSkeleton />
        </section>

        {/* Product Detail Page Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Product Detail Page Skeleton</h2>
          <ProductDetailPageSkeleton />
        </section>

        {/* Content Blocks Skeleton */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Content Blocks Skeleton</h2>
          <ContentBlocksSkeleton count={3} />
        </section>
      </div>
    </PageContainer>
  );
}
