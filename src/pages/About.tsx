import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Shield, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the safety and security of every transaction on our platform."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by travelers, for travelers. We understand your needs."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Quick, hassle-free transactions that save time and money for everyone."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Users" },
    { number: "2,00,000+", label: "Tickets Exchanged" },
    { number: "₹5 Cr+", label: "Money Saved" },
    { number: "99.9%", label: "Success Rate" }
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
              About <span className="text-gradient">SwapTicket</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              India's most trusted platform for buying and selling unused train tickets. 
              We're revolutionizing how people exchange travel bookings.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-lg gradient-primary">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a secure, efficient, and user-friendly platform that connects 
                    travelers who need to exchange train tickets, reducing waste and helping 
                    people save money while traveling across India.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-lg gradient-primary">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's leading ticket exchange platform, fostering a 
                    community where travelers can easily, safely, and affordably exchange 
                    their unused bookings with others who need them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at SwapTicket
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="p-4 rounded-lg gradient-primary inline-block mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground">
                Numbers that speak for our community's trust and growth
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <Card className="card-hover max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    SwapTicket was born from a simple observation: millions of train tickets 
                    go unused every year while countless travelers struggle to find available 
                    seats during peak seasons.
                  </p>
                  <p>
                    Founded in 2024 by a team of travel enthusiasts and technology experts, 
                    we set out to bridge this gap by creating a secure platform where unused 
                    tickets could find new owners who desperately need them.
                  </p>
                  <p>
                    What started as a solution to a common problem has grown into India's 
                    most trusted ticket exchange platform, helping thousands of travelers 
                    save money and reducing ticket wastage across the country.
                  </p>
                  <p>
                    Today, we continue to innovate and improve our platform, always keeping 
                    our users' security, convenience, and satisfaction at the heart of 
                    everything we do.
                  </p>
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

export default About;