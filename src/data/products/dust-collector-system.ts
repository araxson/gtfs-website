import { Product } from '../../lib/types';

export const dustCollectorSystem: Product[] = [
  {
    "id": "inclined-cartridge-dust-collector",
    "name": "Inclined Cartridge Dust Collector",
    "productType": "Inclined Cartridge System",
    "model": "SFF/ICD-001",
    "brand": "FORST FILTER",
    "description": "Complete industrial dust collection systems with inclined cartridge design for improved airflow distribution and enhanced filter performance.",
    "images": ["/placeholder.svg"],
    "features": [
      "Angled Cartridge Design improves airflow distribution, reduces dust accumulation, enhances filter lifespan",
      "High Filtration Efficiency removes up to 99.9% of airborne dust",
      "Pulse Jet Cleaning System: Automatic, efficient cleaning ensures filters remain unclogged",
      "Compact & Modular Structure: Space-saving design allows easy installation and scalability",
      "Durable Construction: Heavy-duty steel with anti-corrosion coating",
      "Customizable Specifications: Airflow, filter quantity, and filtration area tailored to specific needs"
    ],
    "applications": [
      "Cement Plants",
      "Metallurgical Industry", 
      "Chemical Processing",
      "Pharmaceutical Manufacturing",
      "Woodworking Workshops",
      "Food Processing Plants",
      "Power Generation Facilities",
      "Mining and Quarrying"
    ],
    "dimensions": {
      "width": "3000mm – 8000mm",
      "height": "4000mm – 8000mm",
      "customizable": true
    },
    "technicalSpecs": {
      "filtrationEfficiency": "≥99.9%",
      "airflowCapacity": "1000 – 25,000 m³/h (customizable)",
      "pressureDrop": "≤2500 Pa",
      "operatingTemperature": "-20°C to 120°C"
    },
    "materials": {
      "housing": "Carbon Steel/Stainless Steel",
      "filterMedia": "Inclined Cartridge Filters",
      "finish": "Powder Coating/Anti-corrosion Paint"
    },
    "category": "dust-collector-system",
    "certifications": ["ISO9001", "Industrial Safety Standards"]
  },
  {
    "id": "big-capacity-lower-cost-dust-collector",
    "name": "Big Capacity Lower Cost Dust Collector Equipment",
    "productType": "High-Capacity Economic Dust Collector",
    "model": "SFF/BCD-001",
    "brand": "FORST FILTER",
    "description": "Large capacity dust collection system designed for high-volume applications while maintaining cost-effectiveness and operational efficiency.",
    "images": ["/placeholder.svg"],
    "features": [
      "High-capacity design for large air volumes",
      "Cost-effective solution for budget-conscious operations",
      "Efficient dust collection and removal",
      "Scalable modular design",
      "Low operating costs",
      "Simple maintenance procedures"
    ],
    "applications": [
      "Large manufacturing facilities",
      "Bulk material handling",
      "Mining operations",
      "Cement production",
      "Steel mills",
      "Power plants",
      "Large woodworking facilities",
      "Industrial complexes"
    ],
    "dimensions": {
      "width": "5000mm – 12000mm",
      "height": "6000mm – 12000mm",
      "customizable": true
    },
    "technicalSpecs": {
      "airflowCapacity": "20,000 – 100,000 m³/h",
      "filtrationEfficiency": "≥99.5%",
      "pressureDrop": "≤3000 Pa",
      "operatingTemperature": "Up to 150°C"
    },
    "materials": {
      "housing": "Heavy-duty carbon steel",
      "filterMedia": "High-capacity bag or cartridge filters",
      "collection": "Large capacity dust storage"
    },
    "category": "dust-collector-system",
    "certifications": ["ISO9001"]
  },
  {
    "id": "dust-collection-system-woodworking",
    "name": "Dust Collection System Woodworking Dust Collector",
    "productType": "Woodworking-Specific Dust Collection System",
    "model": "SFF/WCS-001",
    "brand": "FORST FILTER",
    "description": "Specialized dust collection system designed specifically for woodworking operations with optimized performance for wood dust characteristics.",
    "images": ["/placeholder.svg"],
    "features": [
      "Woodworking-specific design",
      "Optimized for wood dust characteristics",
      "High-efficiency filtration",
      "Fire safety features",
      "Easy maintenance access",
      "Scalable system design"
    ],
    "applications": [
      "Woodworking shops",
      "Furniture manufacturing",
      "Cabinet making",
      "Sawmills",
      "Wood processing facilities",
      "Carpentry workshops"
    ],
    "dimensions": {
      "customizable": true,
      "systemSize": "Scalable",
      "ductwork": "Included"
    },
    "technicalSpecs": {
      "filtrationEfficiency": "≥99.5%",
      "woodDustOptimized": true,
      "fireProtection": "Available",
      "airflow": "Variable CFM"
    },
    "materials": {
      "housing": "Industrial steel",
      "filterMedia": "Wood dust optimized",
      "ductwork": "Galvanized steel"
    },
    "category": "dust-collector-system",
    "certifications": ["NFPA 664", "ISO9001"]
  }
];