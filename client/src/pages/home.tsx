import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Sparkles, Calendar } from "lucide-react";
import heroBg from "@assets/stock_images/luxury_corporate_eve_d4c0885d.jpg";
import logo from "@assets/IMG-20251128-WA0008_1764348866314.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={heroBg} 
            alt="Astral Event" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            {/* Logo with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={logo} 
                alt="Astral Logo" 
                className="h-32 md:h-48 relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Where Vision Meets <span className="text-gold-gradient">Perfection</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Premier Event Management & Professional Cleaning Services across Australia.
            Transforming ideas into experiences and spaces into perfection.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 text-lg h-14">
                Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 text-lg h-14">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-medium">
              <span className="w-12 h-[1px] bg-primary"></span>
              Welcome to Astral
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              Creating Memorable Events & Immaculate Environments
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are looking to create a memorable event or maintain an immaculate environment, look no further than The Astral Entertainment. Whether it's delivering high-impact events or ensuring spotless commercial and residential spaces, we are your trusted partner for excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As one of Australia’s leading event and cleaning service providers, we pride ourselves on innovation, professionalism, and complete customer satisfaction.
            </p>
            <Link href="/about">
              <Button variant="link" className="text-primary p-0 h-auto font-semibold group">
                Read More About Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 rounded-lg -z-10 translate-x-4 translate-y-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-card p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <Sparkles className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Events</h3>
                  <p className="text-sm text-muted-foreground">Unforgettable experiences crafted with precision.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <Star className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">Top-tier standards exceeding expectations.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <Calendar className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Planning</h3>
                  <p className="text-sm text-muted-foreground">End-to-end management from concept to completion.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                  <Sparkles className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Cleaning</h3>
                  <p className="text-sm text-muted-foreground">Spotless commercial and residential spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
