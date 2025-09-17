import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ticket, Users, Shield, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "100% Secure Transactions",
      description: "Advanced encryption and verification ensure your money and tickets are always safe."
    },
    {
      icon: Users,
      title: "Verified Community",
      description: "All users are verified with mobile OTP and document verification for trust."
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Instant ticket transfers and payments processed within minutes, not days."
    },
    {
      icon: Ticket,
      title: "All Train Types",
      description: "Support for all Indian Railways tickets - Express, Superfast, Local trains."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Register & Verify",
      description: "Sign up with your mobile number and complete quick verification."
    },
    {
      step: "02", 
      title: "List Your Ticket",
      description: "Upload ticket details and set your price for unused bookings."
    },
    {
      step: "03",
      title: "Connect & Sell",
      description: "Get matched with buyers and complete secure transactions."
    },
    {
      step: "04",
      title: "Safe Payment",
      description: "Receive payment instantly once ticket transfer is verified."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Saved ₹2,800 on my last trip to Delhi! The process was so smooth and secure."
    },
    {
      name: "Rajesh Kumar", 
      location: "Bangalore",
      rating: 5,
      comment: "Great platform! Sold my unused ticket in just 15 minutes. Highly recommend!"
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad", 
      rating: 5,
      comment: "Finally found a trustworthy place to exchange train tickets. Amazing experience!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Why Choose SwapTicket */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-gradient">SwapTicket?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of smart travelers who trust us for secure ticket exchanges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-lg gradient-primary inline-block mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to start buying and selling train tickets safely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/how-it-works">
                <Button size="lg" className="btn-gradient">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground">
                Trusted by thousands of travelers across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Saving?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join SwapTicket today and discover a smarter way to travel. 
                  Buy and sell train tickets with complete security and ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" className="btn-gradient">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
