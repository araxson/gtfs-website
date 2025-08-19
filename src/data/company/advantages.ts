export const companyAdvantages = [
  {
    title: "Excellent Quality",
    description: "Pursuit of excellence in quality with every product delivered. Strict quality control and advanced manufacturing. Products meet the highest industry standards. Built to perform, built to last."
  },
  {
    title: "Efficient Service", 
    description: "Principle: Customer First, Quality Oriented, Continuous Improvement, and Shared Value. Efficient, professional, and thoughtful service to every customer. Customer satisfaction is constant pursuit."
  },
  {
    title: "Rapid Logistics",
    description: "High-quality products with fast and reliable logistics. Prioritizing customer needs, ensuring consistent quality, and delivering on time. Help clients reduce downtime and maintain efficient operations."
  }
] as const;

export type CompanyAdvantage = typeof companyAdvantages[number];
