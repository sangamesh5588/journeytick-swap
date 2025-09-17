import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Clock, CheckCircle, XCircle, AlertCircle, DollarSign } from "lucide-react";

const Refund = () => {
  const refundScenarios = [
    {
      icon: CheckCircle,
      title: "Full Refund Scenarios",
      color: "text-success",
      bgColor: "bg-success/10",
      scenarios: [
        "Seller's ticket is found to be invalid or cancelled",
        "Ticket PNR does not match the provided information", 
        "Seller fails to transfer ticket within 24 hours",
        "Technical error on our platform prevents transaction completion",
        "Fraudulent listing detected by our security system"
      ]
    },
    {
      icon: RefreshCw,
      title: "Partial Refund Scenarios", 
      color: "text-warning",
      bgColor: "bg-warning/10",
      scenarios: [
        "Buyer cancels after 2 hours but before ticket transfer",
        "Mutual agreement between buyer and seller with processing fee deduction",
        "Train cancellation by Indian Railways (refund amount as per railway policy)",
        "Dispute resolution where both parties share responsibility"
      ]
    },
    {
      icon: XCircle,
      title: "No Refund Scenarios",
      color: "text-destructive", 
      bgColor: "bg-destructive/10",
      scenarios: [
        "Ticket successfully transferred and verified by buyer",
        "Buyer cancels after ticket transfer is completed",
        "Change of mind after successful transaction completion",
        "Issues arising after travel date has passed",
        "Violation of platform terms by the buyer"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Refund",
      description: "Contact our support team within 24 hours of the issue through chat, email, or phone."
    },
    {
      step: "02", 
      title: "Investigation",
      description: "Our team reviews the transaction details, communications, and evidence from both parties."
    },
    {
      step: "03",
      title: "Decision",
      description: "Refund decision is made based on our policy and communicated to all parties within 2-3 business days."
    },
    {
      step: "04",
      title: "Processing",
      description: "Approved refunds are processed immediately to your original payment method or UPI account."
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
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to fair and transparent refunds. Understand when and how 
              you can get your money back on SwapTicket.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Refund Guarantee */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-8 text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">100% Refund Guarantee</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At SwapTicket, we stand behind every transaction. If you receive an invalid ticket 
                  or face issues due to seller fraud, you're protected by our comprehensive refund policy. 
                  Your satisfaction and security are our top priorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Refund Scenarios */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Refund Scenarios</h2>
              <p className="text-xl text-muted-foreground">
                Understanding when refunds apply based on different situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {refundScenarios.map((scenario, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className={`p-4 rounded-lg ${scenario.bgColor} inline-block mb-6`}>
                      <scenario.icon className={`h-8 w-8 ${scenario.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{scenario.title}</h3>
                    <ul className="space-y-3">
                      {scenario.scenarios.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Refunds Work</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined refund process ensures quick resolution and transparent communication
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto">
                        {step.step}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Refund Timeline</h2>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>UPI Refunds:</strong> Instant to 2 hours</li>
                    <li>• <strong>Bank Transfers:</strong> 1-3 business days</li>
                    <li>• <strong>Credit Cards:</strong> 3-7 business days</li>
                    <li>• <strong>Digital Wallets:</strong> Instant to 24 hours</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-warning" />
                    <h2 className="text-2xl font-bold">Important Notes</h2>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Refund requests must be made within 24 hours</li>
                    <li>• Original payment method will be used for refunds</li>
                    <li>• Processing fees may apply in certain cases</li>
                    <li>• Disputes require evidence from both parties</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need Help with a Refund?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our support team is available 24/7 to help you with any refund-related 
                  questions or to process your refund request.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Email:</strong> refunds@swapticket.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Live Chat:</strong> Available on our platform</p>
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

export default Refund;