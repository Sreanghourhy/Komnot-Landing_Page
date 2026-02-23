import { motion } from "framer-motion";
import {
  MessageSquareWarning,
  Link2,
  Mic,
  ShieldCheck,
  Globe,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: MessageSquareWarning,
    title: "Instant Message Verification",
    emoji: "📧",
    description:
      "Paste any suspicious SMS, Telegram, Facebook, or email message. Our AI analyzes text patterns, sender information, and content to detect phishing attempts in 3 seconds.",
    bullets: [
      "Detects impersonation (fake banks, government, CEOs)",
      "Identifies urgency tactics and manipulation",
      "Supports Khmer and English",
      "95% accuracy rate",
    ],
    color: "primary" as const,
  },
  {
    icon: Link2,
    title: "Real-Time URL Protection",
    emoji: "🔗",
    description:
      "Automatic link scanning blocks malicious URLs before you click. Our AI checks domain reputation, visual similarity to real brands, and cross-references global threat databases.",
    bullets: [
      "Automatic interception on Android",
      "Detects typosquatting (fake bank URLs)",
      "Checks SSL certificates and domain age",
      "Blocks access to confirmed scam sites",
    ],
    color: "safe" as const,
  },
  {
    icon: Mic,
    title: "Voice & Call Scam Detection",
    emoji: "🎤",
    description:
      "Record or upload voice messages and phone calls. Our speech-to-text AI analyzes caller scripts, urgency patterns, and impersonation attempts common in vishing scams.",
    bullets: [
      "Speech-to-text in Khmer & English",
      "Detects scripted scam calls",
      "Identifies fake bank/government callers",
      "Voice stress analysis",
    ],
    color: "warning" as const,
  },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  safe: { bg: "bg-safe/10", text: "text-safe" },
  warning: { bg: "bg-warning/10", text: "text-warning" },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Comprehensive Protection Against Online Scams
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const cm = colorMap[f.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-background rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${cm.bg} ${cm.text} mb-5`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {f.emoji} {f.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm flex-1">
                  {f.description}
                </p>
                <ul className="space-y-2">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${cm.text}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
