import { motion } from "framer-motion";
import { Star, Users, ShieldCheck, DollarSign } from "lucide-react";

const testimonials = [
  {
    quote:
      "Finally, I can sleep at night knowing I won't fall for scams. This app is a lifesaver.",
    name: "Sopheap",
    role: "Online Fashion Seller",
  },
  {
    quote:
      "Saved me $150 when it detected a fake payment screenshot. Worth every penny of Premium.",
    name: "Piseth",
    role: "Freelance Designer",
  },
  {
    quote:
      "Our customer service team uses Komnot to verify suspicious reports. Productivity up 40%.",
    name: "Dara",
    role: "Small Business Owner",
  },
];

const proofStats = [
  { icon: Users, value: "150+", label: "Beta Users Protected" },
  { icon: ShieldCheck, value: "2,847", label: "on Waitlist" },
  { icon: DollarSign, value: "$15,000", label: "Scam Losses Prevented" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trusted by Cambodians and Businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 py-8 px-6 rounded-2xl bg-primary/5 border border-primary/10"
        >
          {proofStats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
