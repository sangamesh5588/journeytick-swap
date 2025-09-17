import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Hero = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your transactions are protected with bank-level security"
    },
    {
      icon: Clock,
      title: "Instant Transfer",
      description: "Quick and hassle-free ticket transfers in minutes"
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of verified users buying and selling tickets"
    }
  ];

  const benefits = [
    "No booking fees or hidden charges",
    "Verified sellers and buyers only", 
    "24/7 customer support",
    "Instant refund guarantee",
    "Mobile-friendly platform"
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container relative mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Buy & Sell Train Tickets{" "}
                <span className="text-gradient">Safely</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                India's most trusted platform for exchanging unused train tickets. 
                Join thousands who save money and help others travel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="btn-gradient">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn How
                </Button>
              </Link>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};