import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeServicesGlance from "@/components/home/HomeServicesGlance";
import HomeProof from "@/components/home/HomeProof";
import Marquee from "@/components/Marquee";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeContactGlance from "@/components/home/HomeContactGlance";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeServicesGlance />
        <HomeProof />
        <Marquee />
        <HomeTestimonials />
        <HomeContactGlance />
      </main>
      <Footer />
    </>
  );
}
