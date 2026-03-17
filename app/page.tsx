import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WeddingDetails } from "@/components/WeddingDetails";
import { Timeline } from "@/components/Timeline";
import { Venue } from "@/components/Venue";
import { RSVP } from "@/components/RSVP";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Intro />
      <PhotoGallery />
      <WeddingDetails />
      <Timeline />
      <Venue />
      <RSVP />
      <Footer />
    </main>
  );
}
