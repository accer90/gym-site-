export interface GymTiming {
  session: string;
  days: string;
  openTime: string; // "04:30"
  closeTime: string; // "10:00"
  display: string;
}

export interface ContactData {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: {
    street: string;
    area: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
  };
  timings: {
    morning: GymTiming;
    evening: GymTiming;
    sunday: GymTiming;
  };
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

export const contactData: ContactData = {
  name: "ACE GYM",
  tagline: "NEVER GIVE UP",
  subTagline: "Ramnagar's Premier Luxury & Hardcore Fitness Destination",
  phone: "78965233120",
  phoneFormatted: "+91 78965 23312",
  whatsapp: "78965233120",
  whatsappMessage: "Hi ACE GYM! I would like to book my FREE Trial session & inquire about membership plans.",
  email: "contact@acegymramnagar.com",
  address: {
    street: "Main Station Road, Bharatpuri",
    area: "Bharatpuri",
    landmark: "Near Railway Station / Corbett Link Road",
    city: "Ramnagar",
    district: "Nainital",
    state: "Uttarakhand",
    country: "India",
    pincode: "244715",
    fullAddress: "ACE GYM, Bharatpuri, Ramnagar (Nainital), Uttarakhand 244715, India",
  },
  timings: {
    morning: {
      session: "Morning Session",
      days: "Monday – Saturday",
      openTime: "04:30",
      closeTime: "10:00",
      display: "4:30 AM – 10:00 AM",
    },
    evening: {
      session: "Evening Session",
      days: "Monday – Saturday",
      openTime: "16:00",
      closeTime: "22:00",
      display: "4:00 PM – 10:00 PM",
    },
    sunday: {
      session: "Sunday (Active Recovery & Cardio)",
      days: "Sunday",
      openTime: "06:00",
      closeTime: "12:00",
      display: "6:00 AM – 12:00 PM",
    },
  },
  socials: {
    instagram: "https://instagram.com/acegym_ramnagar",
    facebook: "https://facebook.com/acegymramnagar",
    youtube: "https://youtube.com/@acegymramnagar",
  },
  // Google Maps embed URL centered on Ramnagar, Nainital
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13904.764506509618!2d79.11745431697274!3d29.395758117621255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a16b9cb3c5889%3A0xb376fc6d66e51147!2sBharatpuri%2C%20Ramnagar%2C%20Uttarakhand%20244715!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=ACE+GYM+Bharatpuri+Ramnagar+Nainital+Uttarakhand",
};
