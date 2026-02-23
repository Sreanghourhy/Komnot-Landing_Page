import { motion } from "framer-motion";
import { Upload, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Submit",
    description: "Upload screenshot, paste text, or share link",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Analyze",
    description: "AI checks against 50,000+ scam database in 3 seconds",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Protect",
    description: "Get clear verdict: Safe, Warning, or Scam",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Instant AI Verification in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Upload a screenshot, paste text, or share a link—Komnot's
            multi-modal AI analyzes it using machine learning, visual
            recognition, and behavioral patterns trained specifically on
            Cambodian scams.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                <step.icon className="h-7 w-7" />
              </div>
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                Step {step.num}
              </p>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-full max-w-[80px] border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            See Komnot in Action
          </h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-border bg-surface flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p className="text-lg font-semibold text-muted-foreground">
                Product Demo Video / Interactive Demo
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                [Product Demo Placeholder — 1920×1080]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
