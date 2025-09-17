import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How does SwapTicket work?",
      answer: "SwapTicket is a secure platform where you can buy and sell unused train tickets. Sellers list their unused tickets with details like PNR, route, and price. Buyers browse available tickets and purchase them through our secure payment system. Once verified, the ticket is transferred to the buyer."
    },
    {
      question: "Is it safe to buy tickets through SwapTicket?",
      answer: "Yes, absolutely! We use bank-level security with encrypted transactions. All users are verified through mobile OTP and document verification. We also have an escrow system that holds payments until the ticket transfer is confirmed by both parties."
    },
    {
      question: "What happens if my purchased ticket is invalid?",
      answer: "We have a 100% refund guarantee. If a purchased ticket turns out to be invalid or cancelled, you'll receive a full refund immediately. Our verification system checks ticket validity before completing transactions."
    },
    {
      question: "How quickly can I sell my unused ticket?",
      answer: "Most tickets sell within a few hours to a few days, depending on the route and demand. Popular routes like Mumbai-Delhi or Bangalore-Chennai typically sell faster. You can adjust your price to sell quicker if needed."
    },
    {
      question: "What types of train tickets can I sell?",
      answer: "You can sell most types of Indian Railways tickets including Express, Superfast, Rajdhani, Shatabdi, and Duronto trains. However, we don't allow sale of platform tickets, season passes, or already partially used journey tickets."
    },
    {
      question: "How do I get paid for my sold ticket?",
      answer: "Once the ticket transfer is confirmed, payment is instantly transferred to your registered UPI account. We don't charge any commission - you receive the full amount you set as the selling price."
    },
    {
      question: "Can I cancel a transaction after payment?",
      answer: "Buyers can cancel within 2 hours of purchase for a full refund. After that, cancellation depends on the seller's agreement. Sellers can cancel before confirming the ticket transfer, but frequent cancellations may affect your seller rating."
    },
    {
      question: "What documents do I need for verification?",
      answer: "You need a valid government ID (Aadhaar card preferred), mobile number for OTP verification, and a UPI ID for payments. Additional verification may be required for high-value transactions."
    },
    {
      question: "Are there any hidden charges or commissions?",
      answer: "No, SwapTicket is completely free for both buyers and sellers. We don't charge any commission, platform fees, or hidden charges. The price you see is the price you pay."
    },
    {
      question: "What if I need help during a transaction?",
      answer: "Our customer support is available 24/7 through live chat, phone, and email. We also have a comprehensive help section and can assist with any transaction issues in real-time."
    },
    {
      question: "Can I modify my listing after posting?",
      answer: "Yes, you can edit your ticket listing price and description anytime before it's sold. However, core details like PNR, train number, and journey date cannot be changed for security reasons."
    },
    {
      question: "How does the referral program work?",
      answer: "When you refer a friend using your unique referral code, both you and your friend get bonus credits once they complete their first transaction. These credits can be used for future transactions on the platform."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      questions: faqs.slice(0, 3)
    },
    {
      title: "Buying Tickets", 
      questions: faqs.slice(3, 6)
    },
    {
      title: "Selling Tickets",
      questions: faqs.slice(6, 9)
    },
    {
      title: "Account & Support",
      questions: faqs.slice(9, 12)
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
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about using SwapTicket. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    {category.title}
                  </h2>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${categoryIndex}-${index}`}
                            className="border border-border rounded-lg px-4"
                          >
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <Card className="card-hover max-w-4xl mx-auto gradient-hero border-primary/20">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-lg gradient-primary">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our friendly support team is here to help you with any questions 
                  about buying or selling train tickets on SwapTicket.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="btn-gradient">
                      Contact Support
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Live Chat
                  </Button>
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

export default FAQ;