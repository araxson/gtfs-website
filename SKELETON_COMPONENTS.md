# Skeleton Components Documentation

This document describes the available skeleton components for creating loading states that match the actual UI structure of your pages.

## Overview

The skeleton components are designed to provide a realistic loading experience by mimicking the actual layout and structure of your pages. Each skeleton type is specifically crafted to match the corresponding page layout, ensuring consistency between loading and loaded states.

## Available Skeleton Types

### 1. Page Header Skeleton (`PageHeaderSkeleton`)
- **Purpose**: Loading state for page headers with title, description, and action buttons
- **Use Case**: Any page that uses the `PageHeader` component
- **Features**: 
  - Hero section styling with proper spacing
  - Title and description placeholders
  - Action button placeholders

```tsx
import { PageHeaderSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<PageHeaderSkeleton />
```

### 2. Hero Carousel Skeleton (`HeroCarouselSkeleton`)
- **Purpose**: Loading state for the hero carousel section
- **Use Case**: Home page hero section
- **Features**:
  - Full-height carousel layout
  - Title, description, and button placeholders
  - Feature highlights grid

```tsx
import { HeroCarouselSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<HeroCarouselSkeleton />
```

### 3. Product Grid Skeleton (`ProductGridSkeleton`)
- **Purpose**: Loading state for product grid layouts
- **Use Case**: Product listing pages, featured products sections
- **Features**:
  - Responsive grid layout (md:grid-cols-2 lg:grid-cols-3)
  - Product image placeholders
  - Badge and description placeholders
  - Action button placeholders

```tsx
import { ProductGridSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ProductGridSkeleton count={6} /> // Shows 6 product skeletons
```

### 4. Category Grid Skeleton (`CategoryGridSkeleton`)
- **Purpose**: Loading state for category grid layouts
- **Use Case**: Category listing pages, main navigation sections
- **Features**:
  - Responsive grid layout
  - Category image placeholders
  - Title and description placeholders
  - Product count and action button placeholders

```tsx
import { CategoryGridSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<CategoryGridSkeleton count={6} /> // Shows 6 category skeletons
```

### 5. Search Results Skeleton (`SearchResultsSkeleton`)
- **Purpose**: Loading state for search result lists
- **Use Case**: Search pages, filtered results
- **Features**:
  - List layout with image and text placeholders
  - Consistent spacing and borders

```tsx
import { SearchResultsSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<SearchResultsSkeleton count={5} /> // Shows 5 result skeletons
```

### 6. Contact Form Skeleton (`ContactFormSkeleton`)
- **Purpose**: Loading state for contact forms
- **Use Case**: Contact page forms
- **Features**:
  - Form field placeholders
  - Two-column layout for form fields
  - Sidebar information placeholders

```tsx
import { ContactFormSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ContactFormSkeleton />
```

### 7. Product Detail Skeleton (`ProductDetailSkeleton`)
- **Purpose**: Loading state for individual product detail sections
- **Use Case**: Product detail pages, product cards
- **Features**:
  - Product image placeholder
  - Badge and description placeholders
  - Tab navigation placeholders
  - Feature list placeholders

```tsx
import { ProductDetailSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ProductDetailSkeleton />
```

### 8. Category Page Skeleton (`CategoryPageSkeleton`)
- **Purpose**: Loading state for category page layouts
- **Use Case**: Category detail pages
- **Features**:
  - Hero image placeholder
  - Category information section
  - Product grid with specified count
  - Sidebar statistics

```tsx
import { CategoryPageSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<CategoryPageSkeleton count={6} /> // Shows 6 product skeletons
```

### 9. Home Page Skeleton (`HomePageSkeleton`)
- **Purpose**: Loading state for the complete home page
- **Use Case**: Home page loading state
- **Features**:
  - Hero carousel skeleton
  - Company advantages section
  - Product categories section
  - Featured products section
  - Quality standards section
  - CTA section

```tsx
import { HomePageSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<HomePageSkeleton />
```

### 10. Contact Page Skeleton (`ContactPageSkeleton`)
- **Purpose**: Loading state for the complete contact page
- **Use Case**: Contact page loading state
- **Features**:
  - Page header skeleton
  - Contact form skeleton
  - Contact information sidebar
  - Service areas section

```tsx
import { ContactPageSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ContactPageSkeleton />
```

### 11. Product Detail Page Skeleton (`ProductDetailPageSkeleton`)
- **Purpose**: Loading state for the complete product detail page
- **Use Case**: Product detail page loading state
- **Features**:
  - Page header skeleton
  - Product image gallery placeholder
  - Product overview section
  - Detailed information tabs
  - Sidebar with contact and product summary

```tsx
import { ProductDetailPageSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ProductDetailPageSkeleton />
```

### 12. Content Blocks Skeleton (`ContentBlocksSkeleton`)
- **Purpose**: Generic loading state for content sections
- **Use Case**: General content areas, fallback skeleton
- **Features**:
  - Header placeholders
  - Card grid layout
  - Configurable count

```tsx
import { ContentBlocksSkeleton } from "@/components/ui/skeleton-loader";

// Usage
<ContentBlocksSkeleton count={6} /> // Shows 6 content block skeletons
```

## Usage Examples

### Basic Usage
```tsx
import { ProductGridSkeleton } from "@/components/ui/skeleton-loader";

function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  if (isLoading) {
    return <ProductGridSkeleton count={6} />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Page-Level Loading States
```tsx
import { HomePageSkeleton } from "@/components/ui/skeleton-loader";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  return (
    <div>
      <HeroCarousel categories={data.categories} />
      {/* Rest of the home page content */}
    </div>
  );
}
```

### Component-Level Loading States
```tsx
import { ProductDetailSkeleton } from "@/components/ui/skeleton-loader";

function ProductDetail({ productId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <div>
      <ProductImageGallery images={product.images} />
      {/* Rest of the product detail content */}
    </div>
  );
}
```

## Customization

### Count Parameter
Many skeleton components accept a `count` parameter to control how many skeleton items to display:

```tsx
<ProductGridSkeleton count={12} /> // Shows 12 product skeletons
<CategoryGridSkeleton count={4} />  // Shows 4 category skeletons
```

### Custom Styling
You can pass custom CSS classes to override default styling:

```tsx
<ProductGridSkeleton 
  count={6} 
  className="my-custom-skeleton-class" 
/>
```

## Best Practices

1. **Match the Layout**: Use the skeleton that most closely matches your actual page layout
2. **Consistent Spacing**: Skeletons use the same spacing and grid systems as your actual components
3. **Realistic Dimensions**: Skeleton dimensions are designed to match typical content sizes
4. **Performance**: Skeletons are lightweight and won't impact performance during loading
5. **Accessibility**: Skeletons provide visual feedback that content is loading

## Demo Page

Visit `/skeleton-demo` to see all skeleton components in action and compare them with your actual page layouts.

## Implementation Notes

- All skeletons use the base `Skeleton` component for consistent styling
- Skeletons respect responsive breakpoints and grid systems
- Hover effects and transitions are preserved for a polished feel
- Skeletons automatically adapt to different screen sizes
- The `bg-muted` class provides subtle contrast against the background
