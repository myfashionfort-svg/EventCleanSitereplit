import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Sparkles, Calendar, CheckCircle2, Users, Trophy, Clock } from "lucide-react";
import heroBg from "@assets/stock_images/luxury_corporate_eve_d4c0885d.jpg";
import teamBg from "@assets/stock_images/professional_corpora_c31864f2.jpg";
import statsBg from "@assets/stock_images/music_festival_stage_40469c0d.jpg";
import logo from "/logo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background z-10" />
          <img 
            src={heroBg} 
            alt="Astral Event" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="container relative z-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 flex justify-center"
          >
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Where Vision Meets <span className="text-gold-gradient">Perfection</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Premier Event Management & Professional Cleaning Services across Australia.
            <br className="hidden md:block" />
            Transforming ideas into experiences and spaces into perfection.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-10 text-lg h-16 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-10 text-lg h-16 rounded-full backdrop-blur-sm">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Introduction */}
      <Section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-medium">
              <span className="w-12 h-[1px] bg-primary"></span>
              Welcome to Astral
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Creating Memorable Events & Immaculate Environments
            </h2>
            <div className="space-y-6 text-lg text-white/85 leading-relaxed">
              <p>
                If you are looking to create a memorable event or maintain an immaculate environment, look no further than The Astral Entertainment. Whether it's delivering high-impact events or ensuring spotless commercial and residential spaces, we are your trusted partner for excellence.
              </p>
              <p>
                The Astral Entertainment has executed engaging and unforgettable events while providing top-tier cleaning and facility services that exceed expectations. Our success lies in our client-first approach—understanding your vision, maintaining clear communication, and delivering outstanding results.
              </p>
              <p>
                As one of Australia’s leading event and cleaning service providers, we pride ourselves on innovation, professionalism, and complete customer satisfaction.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg group">
                  Read More About Us <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
                  <Sparkles className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-3">Events</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Unforgettable experiences crafted with precision and creativity.</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
                  <Star className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-3">Quality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Top-tier standards exceeding expectations every single time.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
                  <Calendar className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-3">Planning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">End-to-end management from concept to completion.</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/5">
                  <Sparkles className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-3">Cleaning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Spotless commercial and residential spaces maintained perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section className="bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Simple, Effective Process</h2>
            <p className="text-muted-foreground text-lg">
              From initial consultation to flawless execution, we guide you through every step with transparency and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
            
            {[
              { step: "1", title: "Consultation", desc: "We listen to your vision, understand your needs, and discuss all details." },
              { step: "2", title: "Planning", desc: "Our team creates a comprehensive plan tailored to your requirements." },
              { step: "3", title: "Execution", desc: "We bring your vision to life with precision, expertise, and attention to detail." },
              { step: "4", title: "Completion", desc: "Deliver exceptional results and ensure your complete satisfaction." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary text-black rounded-full flex items-center justify-center font-display font-bold text-3xl mb-6 shadow-lg shadow-primary/30 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Why Choose Astral</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Excellence in Every Detail</h2>
            <p className="text-muted-foreground text-lg">
              We don't just deliver services; we create experiences and environments that inspire. Here's why leading brands and homeowners trust us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Our team consists of industry veterans in event production and certified cleaning specialists." },
              { icon: Trophy, title: "Award Winning", desc: "Recognized for our commitment to quality, innovation, and customer satisfaction." },
              { icon: Clock, title: "24/7 Support", desc: "We are always available to ensure your events run smoothly and spaces stay clean." },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-black" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <img 
                src={teamBg} 
                alt="Our Team" 
                className="rounded-2xl w-full object-cover aspect-square md:aspect-[4/3]"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">What Our Clients Say</h2>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-xl border border-white/5 relative">
                <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-lg text-white/90 italic leading-relaxed mb-6 relative z-10">
                  Astral Entertainment transformed our annual gala into a spectacular evening. The attention to detail was impeccable, and the cleanup afterwards was so efficient we didn't even notice them. Truly a full-service partner.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">S</div>
                  <div>
                    <div className="text-white font-bold">Sarah Jenkins</div>
                    <div className="text-primary text-sm">Corporate Events Director</div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl border border-white/5 relative">
                <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-lg text-white/90 italic leading-relaxed mb-6 relative z-10">
                  The most reliable cleaning service we've used for our commercial properties. Professional, thorough, and consistent. Highly recommended for any business owner.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">M</div>
                  <div>
                    <div className="text-white font-bold">Michael Chen</div>
                    <div className="text-primary text-sm">Property Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="container mx-auto mb-20">
        <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Ready to Create Something Extraordinary?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're planning a major event or need professional cleaning services, we're here to help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-12 text-xl h-16 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
