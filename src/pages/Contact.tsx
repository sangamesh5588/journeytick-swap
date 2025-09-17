import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added when Supabase is connected
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "support@swapticket.com",
      action: "mailto:support@swapticket.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      contact: "Mumbai, Maharashtra, India",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here to help",
      contact: "Mon-Sat: 9:00 AM - 8:00 PM",
      action: "#"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help with our live chat support",
      availability: "Available 24/7"
    },
    {
      icon: HeadphonesIcon,
      title: "Phone Support", 
      description: "Speak with our customer service representatives",
      availability: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed queries and get comprehensive answers",
      availability: "Response within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 gradient-hero opacity-30" />
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-gradient">SwapTicket</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, suggestions, or need help? We're here for you 24/7. 
              Reach out through any of our support channels.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is your message about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="btn-gradient w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg gradient-primary flex-shrink-0">
                              <info.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{info.description}</p>
                              <a 
                                href={info.action}
                                className="text-primary font-medium hover:underline"
                              >
                                {info.contact}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-xl text-muted-foreground">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="p-4 rounded-lg gradient-primary inline-block mb-6">
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="text-sm text-primary font-medium">
                      {option.availability}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Looking for Quick Answers?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Check out our comprehensive FAQ section where we've answered 
                  the most common questions about using SwapTicket.
                </p>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;