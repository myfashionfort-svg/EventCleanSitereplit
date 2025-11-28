import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
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

      <div className="pt-32 pb-12 bg-black/40 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Let’s Create Something Exceptional Together</p>
        </div>
      </div>

      <Section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We would love to assist you with your existing or upcoming event requirements or help you plan and deliver a world-class experience. Our support team is ready to discuss your project.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 bg-card border-white/10 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">2/3 Page St<br/>Kunda Park QLD 4556</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-white/10 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <a href="mailto:info@astral.net.au" className="text-muted-foreground hover:text-primary transition-colors">
                    info@astral.net.au
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-card border-white/10 flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <a href="tel:+61734726473" className="text-muted-foreground hover:text-primary transition-colors">
                    +61 7 3472 6473
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-white/10 p-8 rounded-xl">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Send an Enquiry</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-black/20 border-white/10 focus:border-primary" />
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
                          <Input placeholder="+61..." {...field} className="bg-black/20 border-white/10 focus:border-primary" />
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
                          <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary">
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
                          placeholder="Tell us about your requirements..." 
                          className="min-h-[120px] bg-black/20 border-white/10 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-semibold text-lg h-12">
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
