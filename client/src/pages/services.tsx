import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic2, Users, Globe, Building2, Home, Sparkles, Truck } from "lucide-react";
import eventBg from "@assets/stock_images/luxury_corporate_eve_d4c0885d.jpg";
import cleanBg from "@assets/stock_images/pristine_modern_offi_0ce46510.jpg";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full">
            <img src={eventBg} className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="w-1/2 h-full">
            <img src={cleanBg} className="w-full h-full object-cover opacity-50" />
          </div>
        </div>
        <div className="container relative z-20 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Excellence in Events & Cleaning</p>
        </div>
      </div>

      <Section className="container mx-auto">
        <Tabs defaultValue="events" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/5 border border-white/10 h-14 p-1">
            <TabsTrigger 
              value="events" 
              className="text-lg font-display data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Event Management
            </TabsTrigger>
            <TabsTrigger 
              value="cleaning" 
              className="text-lg font-display data-[state=active]:bg-primary data-[state=active]:text-black"
            >
              Cleaning Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Unforgettable Events</h2>
              <p className="text-muted-foreground">We specialise in planning, producing, and executing unforgettable events of all scales and types.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Conferencing"
                description="Managing conferences and corporate meetings across multiple sectors. Seamless logistics, impactful presentations, and high-value attendee experiences."
              />
              <ServiceCard 
                icon={<Globe className="w-10 h-10 text-primary" />}
                title="Hybrid & Virtual"
                description="Connect, educate, and engage with audiences across Australia and worldwide using cutting-edge technology for immersive experiences."
              />
              <ServiceCard 
                icon={<Mic2 className="w-10 h-10 text-primary" />}
                title="Public Events"
                description="From art fairs and festivals to commercial expos. We create interactive environments that inspire, inform, and captivate audiences."
              />
            </div>
          </TabsContent>

          <TabsContent value="cleaning" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Immaculate Spaces</h2>
              <p className="text-muted-foreground">We ensure your environment is pristine, safe, and inviting using industry-approved equipment.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<Building2 className="w-10 h-10 text-primary" />}
                title="Commercial Cleaning"
                description="Comprehensive cleaning solutions for businesses and commercial properties."
              />
              <ServiceCard 
                icon={<Building2 className="w-10 h-10 text-primary" />}
                title="Office Maintenance"
                description="Daily or weekly office cleaning to keep your workspace professional and hygienic."
              />
              <ServiceCard 
                icon={<Sparkles className="w-10 h-10 text-primary" />}
                title="Event Cleaning"
                description="Specialized pre-event preparation and post-event cleanup services."
              />
              <ServiceCard 
                icon={<Home className="w-10 h-10 text-primary" />}
                title="Residential"
                description="High-quality cleaning for private residences and managed properties."
              />
              <ServiceCard 
                icon={<Sparkles className="w-10 h-10 text-primary" />}
                title="Sanitisation"
                description="Thorough equipment and venue sanitisation for safety and compliance."
              />
              <ServiceCard 
                icon={<Truck className="w-10 h-10 text-primary" />}
                title="Car Maintenance"
                description="Professional car cleaning and maintenance services."
              />
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card border-white/10 hover:border-primary/40 transition-colors">
      <CardHeader>
        <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center border border-white/10">
          {icon}
        </div>
        <CardTitle className="text-xl text-white font-display">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
