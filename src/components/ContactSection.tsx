import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your textile waste into circular value? 
            Get in touch and let's discuss how Clovis can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required className="bg-background" />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input id="company" name="company" placeholder="Your company name" value={formData.company} onChange={handleChange} className="bg-background" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell us about your textile processing needs..." value={formData.message} onChange={handleChange} required rows={5} className="bg-background resize-none" />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    <Send className="w-4 h-4" />
                    Send message
                  </>}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Or reach us directly</h3>
              <p className="text-muted-foreground mb-8">
                We're always happy to chat about textile circularity, 
                sorting technology, or potential partnerships.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@clovis.tech" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us at</div>
                  <div className="font-semibold text-foreground">hello@clovis.tech</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Based in</div>
                  <div className="font-semibold text-foreground">Paris, France</div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;