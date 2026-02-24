import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

// const stats = [
//   { value: "95%", label: "Accuracy" },
//   { value: "3s", label: "Verification" },
//   { value: "50,000+", label: "Scams Blocked" },
// ];

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-hero-gradient">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          {/* <div className="inline-flex items-center gap-4 md:gap-6 px-5 py-2.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm">
            {stats.map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="font-bold text-foreground">{s.value}</span>
                <span className="text-muted-foreground">{s.label}</span>
                {i < stats.length - 1 && <span className="text-border ml-3">|</span>}
              </span>
            ))}
          </div> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Think Before You{" "}
              <span className="text-gradient-navy">Click.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Protect yourself and your business from phishing and online scams
              with instant AI detection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div>
                <Button size="lg" className="w-full sm:w-auto text-base px-8 shadow-navy" asChild>
                  <a href="#pricing">Get Started Free</a>
                </Button>
              </div>
              <div>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8" asChild>
                  <a href="#pricing">Request Business Demo</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={heroImage}
              alt="Komnot AI scam detection shield"
              className="w-full max-w-lg rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
