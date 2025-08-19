export const navigation = {
  mainNav: [
    {
      title: "Home",
      href: "/",
      description: "Welcome to Global Tech Fluid Services"
    },
    {
      title: "Products",
      href: "/products", 
      description: "Browse our complete range of filter products",
      children: [
        {
          title: "Polyester Air Filter Cartridge",
          href: "/products/polyester-air-filter-cartridge",
          description: "High-performance synthetic filter cartridges"
        },
        {
          title: "Cellulose Air Filter Cartridge", 
          href: "/products/cellulose-air-filter-cartridge",
          description: "Environmentally-friendly cellulose filters"
        },
        {
          title: "Gas Turbine Air Intake Filters",
          href: "/products/gas-turbine-air-intake-filters", 
          description: "Specialized filters for turbine protection"
        },
        {
          title: "Metal Pleated Bag Filters",
          href: "/products/metal-pleated-bag-filters",
          description: "Advanced pleated bag filters with metal support"
        },
        {
          title: "PU Pleated Bag Filters",
          href: "/products/pu-pleated-bag-filters",
          description: "Polyurethane pleated bag filters"
        },
        {
          title: "Panel Air Filters",
          href: "/products/panel-air-filters",
          description: "Flat panel filters for HVAC applications"
        },
        {
          title: "Air Filter Media",
          href: "/products/air-filter-media",
          description: "Raw filter media materials and rolls"
        },
        {
          title: "Fiberglass Filter Media", 
          href: "/products/fiberglass-filter-media",
          description: "High temperature fiberglass media"
        },
        {
          title: "Cartridge Dust Catcher",
          href: "/products/cartridge-dust-catcher",
          description: "Complete dust collection equipment"
        },
        {
          title: "Dust Collector System",
          href: "/products/dust-collector-system",
          description: "Industrial dust collection systems"
        }
      ]
    },
    {
      title: "Applications",
      href: "/applications",
      description: "Industries and applications we serve"
    },
    {
      title: "About",
      href: "/about",
      description: "Learn about Global Tech Fluid Services"
    },
    {
      title: "Contact",
      href: "/contact", 
      description: "Get in touch with our team"
    }
  ],
  footerNav: [
    {
      title: "Products",
      items: [
        {
          title: "Filter Cartridges",
          href: "/products"
        },
        {
          title: "Dust Collectors",
          href: "/products/dust-collector-system"
        },
        {
          title: "Filter Media",
          href: "/products/air-filter-media"
        }
      ]
    },
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          href: "/about"
        },
        {
          title: "Quality Standards",
          href: "/quality"
        },
        {
          title: "Certifications",
          href: "/certifications"
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          title: "Contact Us",
          href: "/contact"
        },
        {
          title: "Technical Support",
          href: "/support"
        },
        {
          title: "Documentation",
          href: "/docs"
        }
      ]
    }
  ]
} as const;

export type Navigation = typeof navigation;
export type MainNavItem = typeof navigation.mainNav[number];
export type FooterNavItem = typeof navigation.footerNav[number];
