import { GridScan } from "@/components/GridScan";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <GridScan
          lineThickness={1}
          linesColor="#ff00ff"
          scanColor="#FF9FFC"
          scanOpacity={0.6}
          gridScale={0.15}
          lineStyle="solid"
          lineJitter={0}
          scanDirection="pingpong"
          enablePost={true}
          bloomIntensity={0.3}
          noiseIntensity={0.02}
          scanGlow={1.0}
          scanSoftness={1.5}
          scanPhaseTaper={0.15}
          scanDuration={1.5}
          scanDelay={0.2}
          sensitivity={0.9}
          enableWebcam={false}
          showPreview={false}
          enableGyro={false}
          scanOnClick={false}
        />
      </div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Products />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

