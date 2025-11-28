import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Award, Heart, Shield } from "lucide-react";
import heroBg from "@assets/stock_images/concert_crowd_silhou_5120b77a.jpg";
import teamBg from "@assets/stock_images/professional_corpora_c31864f2.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />
        <img 
          src={heroBg} 
          alt="About Astral" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-30 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">Bringing visions to life with precision and passion.</p>
        </div>
      </div>

      <Section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              A Dynamic Force in Events & Cleaning
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Astral Entertainment is a dynamic, full-service event management and professional cleaning services agency. Our expertise combines creativity, precision, and operational excellence to deliver exceptional solutions for businesses, venues, and private clients across Australia and beyond.
              </p>
              <p>
                We provide end-to-end event management and customized cleaning services tailored to your requirements. Whether it’s a corporate conference, brand activation, entertainment showcase, or ongoing facility maintenance—we ensure every detail is executed flawlessly.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 transform" />
            <img 
              src={teamBg} 
              alt="Our Team" 
              className="rounded-2xl w-full shadow-2xl border border-white/10 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Excellence</h3>
            <p className="text-muted-foreground">We strive for perfection in every event we manage and every space we clean, ensuring standards that exceed expectations.</p>
          </div>
          <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Passion</h3>
            <p className="text-muted-foreground">Our team is driven by a genuine love for what we do, bringing energy and dedication to every project.</p>
          </div>
          <div className="bg-card p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Reliability</h3>
            <p className="text-muted-foreground">You can count on us to deliver on time, on budget, and with the utmost professionalism, every single time.</p>
          </div>
        </div>

        <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-16 border border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">Our Approach</h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-12">
              Our team of passionate event organisers, technical producers, and certified cleaning specialists work collaboratively to deliver inspiring, innovative, and results-driven outcomes. With experience across diverse industries, we are committed to transforming your concepts into reality—on time, on budget, and beyond expectations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Client-first strategy tailored to your needs",
                "Innovative solutions for complex challenges",
                "Transparent communication at every step",
                "Rigorous quality control and safety standards",
                "Sustainable and eco-friendly practices",
                "Post-project support and follow-up"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
