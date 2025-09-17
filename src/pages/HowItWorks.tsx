import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Upload, Search, CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const sellerSteps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Register & Verify",
      description: "Sign up with your mobile number, complete OTP verification, and upload your documents for account verification.",
      details: ["Mobile number verification", "Email verification", "Document upload (Aadhaar/PAN)", "Profile completion"]
    },
    {
      step: "02", 
      icon: Upload,
      title: "List Your Ticket",
      description: "Upload your unused ticket details including PNR, train information, and passenger details.",
      details: ["Enter PNR number", "Add train and route details", "Upload ticket image", "Set selling price", "Add passenger information"]
    },
    {
      step: "03",
      icon: Search,
      title: "Get Matched",
      description: "Our system matches your ticket with verified buyers looking for the same route and date.",
      details: ["Automatic buyer matching", "Real-time notifications", "Secure chat with buyers", "Price negotiation if enabled"]
    },
    {
      step: "04",
      icon: CreditCard,
      title: "Receive Payment",
      description: "Once the buyer confirms and payment is processed, you receive money directly to your UPI account.",
      details: ["Secure escrow payment", "Instant UPI transfer", "Transaction confirmation", "Rating and review system"]
    }
  ];

  const buyerSteps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up & Verify",
      description: "Create your account with mobile verification and complete your profile for a secure buying experience.",
      details: ["Quick mobile verification", "Profile setup", "Payment method addition", "Preference settings"]
    },
    {
      step: "02",
      icon: Search,
      title: "Search Tickets",
      description: "Use our advanced filters to find tickets for your desired route, date, and train preferences.",
      details: ["Route-based search", "Date and time filters", "Train type selection", "Price range filtering", "Passenger gender preference"]
    },
    {
      step: "03",
      icon: CreditCard,
      title: "Secure Payment",
      description: "Make payment through our secure system with multiple payment options and buyer protection.",
      details: ["Multiple payment methods", "Secure encryption", "Buyer protection policy", "Instant payment processing"]
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Get Your Ticket",
      description: "Receive verified ticket details and travel with confidence knowing your purchase is protected.",
      details: ["Instant ticket delivery", "Verification guarantee", "Travel support", "Refund protection"]
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Escrow Protection",
      description: "Money is held securely until ticket transfer is confirmed by both parties."
    },
    {
      icon: CheckCircle,
      title: "Verification System",
      description: "All users and tickets are verified through our multi-step authentication process."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to help with any issues."
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
              How <span className="text-gradient">SwapTicket</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, secure, and transparent process for buying and selling train tickets. 
              Join thousands who trust our platform every day.
            </p>
          </div>
        </section>

        {/* For Sellers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Ticket Sellers</h2>
              <p className="text-xl text-muted-foreground">
                Turn your unused tickets into money with our secure platform
              </p>
            </div>

            <div className="space-y-12">
              {sellerSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <Card className="card-hover">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                          <div className="p-3 rounded-lg bg-primary/10">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="lg:w-1/2 text-center">
                    <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto">
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Buyers */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Ticket Buyers</h2>
              <p className="text-xl text-muted-foreground">
                Find and purchase the train tickets you need at the best prices
              </p>
            </div>

            <div className="space-y-12">
              {buyerSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <Card className="card-hover">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                          <div className="p-3 rounded-lg bg-secondary/10">
                            <step.icon className="h-6 w-6 text-secondary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="lg:w-1/2 text-center">
                    <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto">
                      <step.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Safety is Our Priority</h2>
              <p className="text-xl text-muted-foreground">
                Advanced security measures to protect every transaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="p-4 rounded-lg gradient-primary inline-block mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied users who trust SwapTicket for their 
                  train ticket buying and selling needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" className="btn-gradient">
                      Sign Up Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Have Questions?
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

export default HowItWorks;