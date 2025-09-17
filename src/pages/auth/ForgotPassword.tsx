import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, Train } from "lucide-react";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Password reset logic will be added when Supabase is connected
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="card-hover border-primary/20">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <Train className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">
                  Reset Your Password
                </CardTitle>
                <p className="text-muted-foreground">
                  {isSubmitted 
                    ? "Check your email for reset instructions"
                    : "Enter your email to receive reset instructions"
                  }
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your registered email"
                          className="pl-10"
                          required
                        />
                        <Mail className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                      </div>
                    </div>

                    <Button type="submit" className="btn-gradient w-full">
                      Send Reset Link
                    </Button>
                  </form>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <Mail className="h-8 w-8 text-success mx-auto mb-2" />
                      <p className="text-success font-medium">Reset link sent!</p>
                      <p className="text-muted-foreground text-sm mt-2">
                        We've sent password reset instructions to your email address. 
                        Please check your inbox and follow the link to reset your password.
                      </p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>Didn't receive the email?</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:underline font-medium"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                )}

                <div className="text-center pt-4 border-t border-border">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Sign In
                  </Link>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary hover:underline font-medium">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;