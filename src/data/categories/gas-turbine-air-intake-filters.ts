import { ProductCategory } from '../../lib/types';
import { gasTurbineAirIntakeFilters } from '../products/gas-turbine-air-intake-filters';

export const gasTurbineAirIntakeFiltersCategory: ProductCategory = {
  id: "gas-turbine-air-intake-filters",
  name: "Gas Turbine Air Intake Filters",
  slug: "gas-turbine-air-intake-filters", 
  overview: "Specialized high-performance filters designed specifically for gas turbine air intake systems. These filters provide critical protection for turbine components in power generation and industrial applications.",
  description: "Our gas turbine air intake filters are engineered to meet the stringent requirements of power generation and industrial gas turbine applications. These specialized filters protect critical turbine components from airborne contaminants while maintaining optimal airflow and efficiency. Designed to withstand harsh operating conditions and provide reliable performance in mission-critical applications.",
  categoryImage: "/products_images/product-catagories-images/gas-turbine-air-intake-filters.webp",
  keyFeatures: [
    "High filtration efficiency",
    "Turbine component protection",
    "High temperature resistance",
    "Optimized airflow design",
    "OEM standards compliance",
    "Corrosion resistant materials",
    "Low pressure drop",
    "Extended service life",
    "Weather resistant construction",
    "Certified performance standards"
  ],
  commonApplications: [
    "Industrial gas turbines",
    "Power generation",
    "Oil and gas processing",
    "Petrochemical plants",
    "Aviation and aerospace",
    "Marine propulsion systems",
    "Compressor stations",
    "Combined cycle power plants",
    "Offshore platforms",
    "Emergency backup generators",
    "Cogeneration facilities",
    "District heating systems"
  ],
  products: gasTurbineAirIntakeFilters,
  subcategories: [
    "Pre-filters",
    "Final Filters",
    "Weather Protection Filters",
    "Salt Removal Filters",
    "High Efficiency Filters"
  ]
};