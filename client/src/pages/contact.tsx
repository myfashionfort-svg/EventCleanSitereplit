import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Contact number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We've received your enquiry and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 bg-black border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Let’s Create Something Exceptional Together. We're ready to listen.
          </p>
        </div>
      </div>

      <Section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Reach Out To Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We would love to assist you with your existing or upcoming event requirements or help you plan and deliver a world-class experience. Our support team is ready to discuss your project, provide expert guidance, and deliver solutions tailored to your vision.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-8 bg-card border-white/10 flex items-start gap-6 hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-lg">2/3 Page St<br/>Kunda Park QLD 4556</p>
                </div>
              </Card>

              <Card className="p-8 bg-card border-white/10 flex items-start gap-6 hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Email Us</h3>
                  <a href="mailto:info@astral.net.au" className="text-muted-foreground text-lg hover:text-primary transition-colors">
                    info@astral.net.au
                  </a>
                </div>
              </Card>

              <Card className="p-8 bg-card border-white/10 flex items-start gap-6 hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Call Us</h3>
                  <a href="tel:+61734726473" className="text-muted-foreground text-lg hover:text-primary transition-colors">
                    +61 7 3472 6473
                  </a>
                </div>
              </Card>
              
              <Card className="p-8 bg-card border-white/10 flex items-start gap-6 hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Clock className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Working Hours</h3>
                  <p className="text-muted-foreground text-lg">
                    Mon - Fri: 9:00 AM - 5:00 PM<br/>
                    Sat - Sun: By Appointment
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-10 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-bold text-white">Send an Enquiry</h2>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="bg-black/40 border-white/10 focus:border-primary h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-black/40 border-white/10 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+61..." {...field} className="bg-black/40 border-white/10 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/40 border-white/10 focus:border-primary h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="events">Event Management</SelectItem>
                          <SelectItem value="cleaning">Cleaning Services</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your event or cleaning requirements..." 
                          className="min-h-[150px] bg-black/40 border-white/10 focus:border-primary resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-semibold text-lg h-14 rounded-lg transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
