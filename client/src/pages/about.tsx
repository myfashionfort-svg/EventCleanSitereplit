import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import heroBg from "@assets/stock_images/concert_crowd_silhou_5120b77a.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src={heroBg} 
          alt="About Astral" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Bringing visions to life with precision and passion.</p>
        </div>
      </div>

      <Section className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Who We Are</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Astral Entertainment is a dynamic, full-service event management and professional cleaning services agency. Our expertise combines creativity, precision, and operational excellence to deliver exceptional solutions for businesses, venues, and private clients across Australia and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 md:p-12 rounded-xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide end-to-end event management and customized cleaning services tailored to your requirements. Whether it’s a corporate conference, brand activation, entertainment showcase, or ongoing facility maintenance—we ensure every detail is executed flawlessly.
            </p>
          </div>
          <div className="bg-card p-8 md:p-12 rounded-xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of passionate event organisers, technical producers, and certified cleaning specialists work collaboratively to deliver inspiring, innovative, and results-driven outcomes. With experience across diverse industries, we are committed to transforming your concepts into reality—on time, on budget, and beyond expectations.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
