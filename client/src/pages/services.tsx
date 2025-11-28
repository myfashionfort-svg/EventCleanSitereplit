import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mic2, Users, Globe, Building2, Home, Sparkles, Truck, Laptop, Music, Palette, Briefcase } from "lucide-react";
import eventBg from "@assets/stock_images/luxury_corporate_eve_d4c0885d.jpg";
import cleanBg from "@assets/stock_images/pristine_modern_offi_0ce46510.jpg";
import weddingBg from "@assets/stock_images/elegant_wedding_rece_f9d4fc32.jpg";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative">
            <img src={eventBg} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
          </div>
          <div className="w-1/2 h-full relative">
            <img src={cleanBg} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
          </div>
        </div>
        <div className="container relative z-20 px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">Excellence in Events & Cleaning</p>
        </div>
      </div>

      <Section className="container mx-auto">
        <Tabs defaultValue="events" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-16 bg-white/5 border border-white/10 h-20 p-2 rounded-full">
            <TabsTrigger 
              value="events" 
              className="text-xl font-display rounded-full data-[state=active]:bg-primary data-[state=active]:text-black h-full transition-all"
            >
              Event Management
            </TabsTrigger>
            <TabsTrigger 
              value="cleaning" 
              className="text-xl font-display rounded-full data-[state=active]:bg-primary data-[state=active]:text-black h-full transition-all"
            >
              Cleaning Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Unforgettable Events</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We specialise in planning, producing, and executing unforgettable events of all scales and types. From intimate gatherings to massive public festivals, our team handles every detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white">Conferencing</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Astral Entertainment brings years of professional expertise in managing conferences and corporate meetings across multiple sectors. Our experience spans both national and international markets, ensuring seamless logistics, impactful presentations, and high-value attendee experiences—no matter the size or location.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Corporate Summits</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Product Launches</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Seminars & Workshops</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img src={weddingBg} alt="Conference" className="rounded-2xl border border-white/10 shadow-2xl" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Laptop className="w-10 h-10 text-primary" />}
                title="Hybrid & Virtual Events"
                description="In today’s evolving landscape, digital engagement is essential. Our hybrid and virtual event solutions allow you to connect, educate, and engage with audiences across Australia and worldwide. We utilise cutting-edge technology to deliver immersive, interactive, and scalable event experiences without geographical limitations."
              />
              <ServiceCard 
                icon={<Mic2 className="w-10 h-10 text-primary" />}
                title="Public Events & Exhibitions"
                description="From art fairs and public festivals to commercial expos and trade shows, we create interactive environments that inspire, inform, and captivate audiences. Exhibitions help brands build credibility and create meaningful impressions."
              />
              <ServiceCard 
                icon={<Music className="w-10 h-10 text-primary" />}
                title="Entertainment & Production"
                description="We handle full-scale production, including sound, lighting, staging, and talent management. Whether it's a concert, gala, or award ceremony, we ensure a show-stopping experience."
              />
            </div>
          </TabsContent>

          <TabsContent value="cleaning" className="space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Immaculate Spaces</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We ensure your environment is pristine, safe, and inviting. Our cleaning specialists use industry-approved equipment, environmentally friendly products, and proven methods to guarantee impeccable results every time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Building2 className="w-10 h-10 text-primary" />}
                title="Commercial Cleaning"
                description="Comprehensive cleaning solutions for businesses, retail spaces, and commercial properties. We create a hygienic environment for your staff and customers."
              />
              <ServiceCard 
                icon={<Briefcase className="w-10 h-10 text-primary" />}
                title="Office & Corporate Facility"
                description="Daily, weekly, or monthly office cleaning services. We maintain boardrooms, workstations, kitchens, and restrooms to the highest standards."
              />
              <ServiceCard 
                icon={<Sparkles className="w-10 h-10 text-primary" />}
                title="Pre & Post Event Cleaning"
                description="Specialized cleaning before the doors open and after the guests leave. We handle the heavy lifting so you can focus on the event itself."
              />
              <ServiceCard 
                icon={<Home className="w-10 h-10 text-primary" />}
                title="Residential & Managed Property"
                description="High-quality cleaning for private residences, real estate listings, and managed properties. We treat every home with respect and care."
              />
              <ServiceCard 
                icon={<Shield className="w-10 h-10 text-primary" />}
                title="Equipment & Venue Sanitisation"
                description="Thorough sanitisation services using hospital-grade disinfectants to ensure the safety and well-being of all occupants."
              />
              <ServiceCard 
                icon={<Truck className="w-10 h-10 text-primary" />}
                title="Car Cleaning & Maintenance"
                description="Professional fleet and private vehicle cleaning. We keep your vehicles looking professional and well-maintained."
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary">Do you service areas outside of Queensland?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, Astral Entertainment operates nationally. We have managed events and provided services in major cities across Australia and can deploy teams as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary">Do you provide eco-friendly cleaning options?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. We are committed to sustainability and use environmentally friendly, non-toxic cleaning products whenever possible to ensure the safety of your environment and the planet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-primary">Can you handle last-minute event requests?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We understand that needs can arise unexpectedly. While we recommend booking in advance, our team is flexible and will do our best to accommodate urgent requests depending on our capacity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card border-white/10 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300 h-full">
      <CardHeader>
        <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
          {icon}
        </div>
        <CardTitle className="text-2xl text-white font-display mb-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-white/60">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
