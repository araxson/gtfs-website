import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkeletonLoaderProps {
  type?: 'page-header' | 'product-grid' | 'product-card' | 'category-grid' | 'search-results' | 'content-blocks';
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
          <div className="space-y-4">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-6 w-96" />
          </div>
        );

      case 'product-grid':
        return (
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
        );

      case 'product-card':
        return (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        );

      case 'category-grid':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
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

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="product-grid" count={count} />;
}

export function CategoryGridSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="category-grid" count={count} />;
}

export function SearchResultsSkeleton({ count = 5 }: { count?: number }) {
  return <SkeletonLoader type="search-results" count={count} />;
}

export function ContentBlocksSkeleton({ count = 6 }: { count?: number }) {
  return <SkeletonLoader type="content-blocks" count={count} />;
}
