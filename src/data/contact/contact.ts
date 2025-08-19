export const contactInfo = {
  email: "info@gtfservices.ca",
  website: "https://www.gtfservices.ca",
  phone: "+1 (555) 123-4567", // Placeholder - should be updated with actual number
  address: {
    street: "Industrial District",
    city: "Manufacturing Zone",
    country: "Canada"
  },
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM EST",
    saturday: "Saturday: 9:00 AM - 2:00 PM EST",
    sunday: "Sunday: Closed"
  }
} as const;

export type ContactInfo = typeof contactInfo;
