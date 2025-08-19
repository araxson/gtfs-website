import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Filter Products - Global Tech Fluid Services | Comprehensive Filtration Solutions",
  description: "Explore our comprehensive range of industrial filtration products including polyester filters, cellulose filters, gas turbine filters, bag filters, and dust collection systems. Custom solutions available.",
  keywords: "industrial filters, polyester air filters, cellulose filters, gas turbine filters, pleated bag filters, panel air filters, dust collector cartridges, custom filtration solutions",
  openGraph: {
    title: "Industrial Filter Products - Global Tech Fluid Services",
    description: "Comprehensive range of industrial filtration solutions for diverse applications and industries with custom options available.",
    type: "website",
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}