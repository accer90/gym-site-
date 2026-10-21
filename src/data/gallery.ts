export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "weights" | "cardio" | "functional" | "amenities";
  categoryLabel: string;
  image: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "heavy-dumbbells",
    title: "Heavy Dumbbell & Free Weights Racks",
    category: "weights",
    categoryLabel: "Free Weights Zone",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    caption: "Solid steel dumbbells ranging up to 60 kg with shock-absorbing rubberized drop platforms.",
  },
  {
    id: "power-cages",
    title: "Olympic Power Cages & Barbells",
    category: "weights",
    categoryLabel: "Free Weights Zone",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
    caption: "Heavy-duty power racks equipped with Texas power bars, calibrated bumper plates, and spotter arms.",
  },
  {
    id: "crossfit-turf",
    title: "Functional AstroTurf & Sled Track",
    category: "functional",
    categoryLabel: "Functional Turf",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    caption: "High-density 25-meter sprint turf, Prowler push sleds, battle ropes, and kettlebell arrays.",
  },
  {
    id: "cardio-deck",
    title: "Advanced Cardio Cinema & Treadmills",
    category: "cardio",
    categoryLabel: "Cardio Arena",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop",
    caption: "Commercial incline treadmills, curved Woodway runners, and StairMasters with scenic Himalayan view windows.",
  },
  {
    id: "plate-loaded-machines",
    title: "Bio-Mechanical Plate Loaded Zone",
    category: "weights",
    categoryLabel: "Machine Deck",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    caption: "Iso-lateral chest presses, hack squats, and leg presses delivering pure mechanical tension with zero joint strain.",
  },
  {
    id: "recovery-lockers",
    title: "Luxury Locker Rooms & Steam Suite",
    category: "amenities",
    categoryLabel: "Amenities & Recovery",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    caption: "Private digital lockers, hot rainforest showers, post-workout steam sauna, and hygiene stations.",
  },
];
