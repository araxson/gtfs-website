import { Product } from '../../lib/types';

export const panelAirFilters: Product[] = [
  {
    "id": "primary-efficiency-panel-filter",
    "name": "Primary Efficiency Panel Filter",
    "productType": "Primary Panel Filter",
    "model": "SFF/PANEL-01",
    "brand": "FORST FILTER",
    "description": "Flat panel filters designed for pre-filtration and general HVAC applications with primary efficiency levels for coarse particle removal.",
    "images": ["/placeholder.svg"],
    "features": [
      "Primary efficiency filtration for coarse particles",
      "Flat panel design for easy installation",
      "Low pressure drop for energy efficiency",
      "Durable frame construction",
      "Cost-effective pre-filtration solution",
      "Compatible with standard HVAC systems"
    ],
    "applications": [
      "HVAC systems",
      "Pre-filtration",
      "Air handling units",
      "Commercial buildings",
      "Industrial facilities",
      "Coarse dust removal"
    ],
    "dimensions": {
      "width": "400mm – 600mm",
      "height": "400mm – 600mm", 
      "thickness": "25mm – 50mm",
      "customizable": true
    },
    "technicalSpecs": {
      "filtrationEfficiency": "85-95% @ 5.0μm",
      "operatingTemperature": "Up to 80°C",
      "pressureDrop": "Low initial pressure drop"
    },
    "materials": {
      "filterMedia": "Synthetic fiber media",
      "frame": "Cardboard, Galvanized steel, Plastic",
      "gasket": "Foam, Rubber"
    },
    "category": "panel-air-filters",
    "certifications": ["ISO9001"]
  },
  {
    "id": "high-medium-efficiency-panel-filter",
    "name": "High/Medium Efficiency Panel Filter with Clapboard",
    "productType": "Medium/High Efficiency Panel Filter",
    "model": "SFF/PANEL-02",
    "brand": "FORST FILTER",
    "description": "Medium to high efficiency panel filter with clapboard design for improved structural integrity and filtration performance.",
    "images": ["/placeholder.svg"],
    "features": [
      "Medium to high efficiency filtration",
      "Clapboard design for structural strength",
      "Pleated media for increased surface area",
      "Rigid frame construction",
      "Uniform airflow distribution",
      "Long service life"
    ],
    "applications": [
      "Commercial HVAC systems",
      "Clean room pre-filtration",
      "Hospital air handling", 
      "Office buildings",
      "Manufacturing facilities",
      "Laboratory environments"
    ],
    "dimensions": {
      "width": "400mm – 600mm",
      "height": "400mm – 600mm",
      "thickness": "50mm – 100mm",
      "customizable": true
    },
    "technicalSpecs": {
      "filtrationEfficiency": "95-99% @ 1.0μm",
      "operatingTemperature": "Up to 80°C",
      "pressureDrop": "Medium pressure drop"
    },
    "materials": {
      "filterMedia": "High-efficiency synthetic media",
      "frame": "Galvanized steel, Aluminum, Plastic",
      "gasket": "Polyurethane, Rubber"
    },
    "category": "panel-air-filters",
    "certifications": ["ISO9001"]
  },
  {
    "id": "hepa-panel-air-filter",
    "name": "HEPA Panel Air Filter without Clapboard",
    "productType": "HEPA Panel Filter",
    "model": "SFF/HEPA-01",
    "brand": "FORST FILTER",
    "description": "High-efficiency particulate air (HEPA) panel filter designed for critical air filtration applications requiring the highest level of particle removal.",
    "images": ["/placeholder.svg"],
    "features": [
      "HEPA efficiency filtration",
      "Captures 99.97% of particles ≥0.3μm",
      "Pleated media construction",
      "Rigid frame without clapboard",
      "Low outgassing materials",
      "Individually tested and certified"
    ],
    "applications": [
      "Clean rooms",
      "Pharmaceutical manufacturing",
      "Hospital operating rooms",
      "Electronics manufacturing",
      "Food processing facilities",
      "Critical air filtration"
    ],
    "dimensions": {
      "width": "400mm – 600mm",
      "height": "400mm – 600mm",
      "thickness": "50mm – 100mm",
      "customizable": true
    },
    "technicalSpecs": {
      "filtrationEfficiency": "≥99.97% @ 0.3μm",
      "operatingTemperature": "Up to 80°C",
      "pressureDrop": "High initial pressure drop"
    },
    "materials": {
      "filterMedia": "HEPA-grade pleated media",
      "frame": "Aluminum or galvanized steel",
      "gasket": "Neoprene or polyurethane"
    },
    "category": "panel-air-filters",
    "certifications": ["HEPA Certified", "ISO9001"]
  }
];