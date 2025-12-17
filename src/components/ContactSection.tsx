import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // Ne pas empêcher la soumission naturelle du formulaire
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your textile waste into circular value? Get in
            touch and let's discuss how Clovis can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center">Send a message</h3>
            <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-background" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <Input id="company" name="company" placeholder="Your company name" className="bg-background" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell us about your textile processing needs..." required rows={5} className="bg-background resize-none" />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                  <Send className="w-4 h-4" />
                  Send message
                </>}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-center">Reach us directly</h3>
              <p className="text-muted-foreground text-center mb-8">
                We're always happy to chat about textile circularity, sorting
                technology, or potential partnerships.
              </p>

              <div className="space-y-4">
                <a href="mailto:hello@clovis.tech" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-border transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email us at</div>
                    <div className="font-semibold text-foreground">louisreungoat@clovis-ai.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Based in</div>
                    <div className="font-semibold text-foreground">Paris, France</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
