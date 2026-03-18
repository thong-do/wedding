import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { SectionDivider } from "@/components/SectionDivider";
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
      <SectionDivider />
      <PhotoGallery />
      <SectionDivider />
      <WeddingDetails />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Venue />
      <SectionDivider />
      <RSVP />
      <Footer />
    </main>
  );
}
