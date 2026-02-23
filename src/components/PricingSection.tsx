import { motion } from "framer-motion";
import { User, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: User,
    title: "Personal Protection",
    subtitle: "Perfect for individuals, freelancers, and online sellers",
    features: [
      "Free tier: 10 checks per day",
      "Premium: Unlimited checks at $2.99/month",
      "Message, link, and voice verification",
      "Real-time URL protection",
    ],
    cta: "Get Started Free",
    ctaSub: "10 checks per day, no credit card required",
    primary: true,
  },
  {
    icon: Building2,
    title: "Enterprise Protection",
    subtitle: "Protect your entire team from phishing and scams",
    features: [
      "Team dashboard and analytics",
      "Custom pricing for 5–500+ employees",
      "API integration available",
      "Priority support and training",
    ],
    cta: "Request Demo",
    ctaSub: "See how Komnot protects your team",
    primary: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Choose Your Protection Plan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 border flex flex-col ${
                p.primary
                  ? "border-primary/30 bg-background shadow-navy"
                  : "border-border bg-background"
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground mb-6">{p.subtitle}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-safe" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={p.primary ? "default" : "outline"}
                className="w-full"
              >
                {p.cta}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                {p.ctaSub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
