import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Database, Bell } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information such as name, email, mobile number, and date of birth",
        "Identity verification documents (Aadhaar, PAN) for account verification",
        "Train ticket information including PNR, route details, and travel dates",
        "Payment information and UPI details for secure transactions",
        "Usage data and device information for improving our services"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To verify your identity and maintain platform security",
        "To facilitate ticket buying and selling transactions",
        "To process payments and prevent fraudulent activities", 
        "To provide customer support and resolve disputes",
        "To send important updates about your transactions and account"
      ]
    },
    {
      icon: Lock,
      title: "Information Security", 
      content: [
        "All data is encrypted using industry-standard SSL/TLS protocols",
        "Payment information is processed through secure, PCI-compliant systems",
        "Personal documents are stored in encrypted format with restricted access",
        "Regular security audits and penetration testing of our systems",
        "Employee access to user data is strictly controlled and monitored"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We never sell or rent your personal information to third parties",
        "Ticket details are shared only with verified buyers/sellers for transactions",
        "Payment processing partners receive only necessary transaction data",
        "Law enforcement agencies may receive data if legally required",
        "Service providers helping us operate the platform under strict agreements"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Controls",
      content: [
        "Access and download your personal data at any time",
        "Correct or update your information through your account settings",
        "Delete your account and associated data (subject to legal requirements)",
        "Opt-out of marketing communications while keeping transaction alerts",
        "Request details about how your information is being used"
      ]
    },
    {
      icon: Bell,
      title: "Cookies and Tracking",
      content: [
        "We use essential cookies to maintain your login session and preferences",
        "Analytics cookies help us understand how users interact with our platform",
        "Third-party cookies may be used for payment processing and verification",
        "You can control cookie settings through your browser preferences",
        "We do not use cookies for targeted advertising or selling user data"
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
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information on SwapTicket.
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
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SwapTicket ("we," "our," or "us") respects your privacy and is committed to protecting 
                  your personal data. This privacy policy will inform you about how we look after your 
                  personal data when you visit our platform and tell you about your privacy rights and 
                  how the law protects you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using SwapTicket, you agree to the collection and use of information in accordance 
                  with this policy. We will only use your personal data when the law allows us to, and 
                  we are committed to ensuring that your privacy is protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Sections */}
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

        {/* Contact & Updates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may update this privacy policy from time to time to reflect changes in our 
                    practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Any changes will be posted on this page with an updated revision date. We 
                    encourage you to review this policy periodically to stay informed about how 
                    we protect your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: privacy@swapticket.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: Mumbai, Maharashtra, India</p>
                  </div>
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

export default Privacy;