import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Envoyé !",
          description:
            "Nous avons bien reçu votre message et reviendrons vers vous rapidement.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            Contact
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à automatiser vos devis et la saisie de vos commandes ? Contactez-nous pour discuter de la façon dont Clovis peut aider votre équipe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Envoyer un message
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Ne remplissez pas ce champ :{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Votre nom
                  </label>
                  <Input id="name" name="name" placeholder="Jean Dupont" required className="bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="jean@entreprise.com" required className="bg-background" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Entreprise
                </label>
                <Input id="company" name="company" placeholder="Nom de votre entreprise" className="bg-background" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-nous de vos besoins en automatisation..."
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Contactez-nous directement
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Nous sommes toujours disponibles pour discuter d'automatisation, de vos processus commerciaux ou de partenariats potentiels.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:louisreungoat@clovis-ai.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-border transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Écrivez-nous à</div>
                    <div className="font-semibold">louisreungoat@clovis-ai.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Basés à</div>
                    <div className="font-semibold">Paris, France</div>
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
