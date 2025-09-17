import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Shield, Gavel, AlertTriangle, CheckCircle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "User Accounts and Eligibility",
      content: [
        "You must be at least 18 years old to use SwapTicket services",
        "All users must complete mobile number and identity verification", 
        "You are responsible for maintaining the confidentiality of your account",
        "One person may maintain only one active account on the platform",
        "False information or impersonation may result in account suspension"
      ]
    },
    {
      icon: Shield,
      title: "Platform Usage Rules",
      content: [
        "Use SwapTicket only for legitimate train ticket buying and selling",
        "Do not list fake, expired, or already used tickets for sale",
        "Respect other users and communicate professionally at all times",
        "Do not attempt to circumvent our security measures or verification processes",
        "Report any suspicious activity or potential fraud to our support team"
      ]
    },
    {
      icon: CheckCircle,
      title: "Ticket Transactions",
      content: [
        "Sellers guarantee that listed tickets are genuine and transferable",
        "Buyers must verify ticket details before completing purchase",
        "All transactions are processed through our secure escrow system",
        "Ticket transfers must be completed within 24 hours of payment",
        "Disputes will be resolved based on evidence and platform policies"
      ]
    },
    {
      icon: Gavel,
      title: "Payment Terms", 
      content: [
        "SwapTicket does not charge any commission or platform fees",
        "Payments are processed instantly upon successful ticket verification",
        "Refunds are provided for invalid tickets or cancelled transactions",
        "Users are responsible for any applicable taxes on their transactions",
        "Payment disputes must be reported within 7 days of transaction"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Selling tickets at prices significantly higher than original fare",
        "Creating multiple accounts or using automated systems",
        "Harassing, threatening, or defrauding other platform users",
        "Attempting to complete transactions outside the platform",
        "Uploading malicious content or attempting to hack the system"
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "SwapTicket acts as an intermediary platform between buyers and sellers",
        "We are not responsible for the actions or defaults of platform users",
        "Our liability is limited to the transaction amount in case of platform errors",
        "We do not guarantee ticket availability or specific pricing",
        "Users participate in transactions at their own risk and discretion"
      ]
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
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-lg gradient-primary">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using SwapTicket. 
              By using our platform, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="card-hover max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of SwapTicket's website and 
                  services. By accessing or using our platform, you agree to be bound by these 
                  Terms and our Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SwapTicket provides a platform for users to buy and sell unused train tickets 
                  in a secure environment. We facilitate these transactions but are not a party 
                  to the actual sale agreements between users.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you disagree with any part of these terms, you may not access or use our services. 
                  We reserve the right to update these terms at any time, and your continued use 
                  constitutes acceptance of any changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 rounded-lg gradient-primary">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We reserve the right to suspend or terminate your account if you violate 
                    these terms or engage in fraudulent activities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You may close your account at any time by contacting our support team. 
                    Upon termination, your right to use the platform ceases immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These Terms are governed by the laws of India. Any disputes will be 
                    subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these terms, contact us at legal@swapticket.com 
                    or +91 98765 43210.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;