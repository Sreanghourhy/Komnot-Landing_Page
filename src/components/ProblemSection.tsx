import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Users, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "91%",
    description: "of cyberattacks start with phishing",
  },
  {
    icon: DollarSign,
    value: "$200,000",
    description: "average cost of business data breach in Cambodia",
  },
  {
    icon: Users,
    value: "Only 3%",
    description: "of users can identify sophisticated phishing",
  },
  {
    icon: TrendingDown,
    value: "Millions",
    description: "lost annually to online scams in Cambodia",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Cambodia's Digital Economy is Under Attack
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cambodia's digital economy is booming, but cybercriminals are
            exploiting low digital literacy—costing citizens and businesses
            millions in fraud annually.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-danger/10 text-danger mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="text-2xl font-extrabold mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Sources:{" "}
          <span className="underline decoration-dotted cursor-pointer">[Citation 1]</span>{" "}
          <span className="underline decoration-dotted cursor-pointer">[Citation 2]</span>{" "}
          <span className="underline decoration-dotted cursor-pointer">[Citation 3]</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
