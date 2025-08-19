export const companyInfo = {
  name: "Global Tech Fluid Services",
  website: "https://www.gtfservices.ca",
  industry: "Industrial Filtration and Pump Solutions Provider",
  tagline: "Delivering Efficient & Durable Filtration & Pumping Solutions",
  mission: "With advanced production technology and stringent quality control in filtration and pumping, committed to enhancing industrial cleanliness and environmental protection."
} as const;

export type CompanyInfo = typeof companyInfo;
