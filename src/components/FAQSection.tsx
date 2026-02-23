import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How accurate is Komnot?",
    a: "Our AI achieves 95% accuracy across message, URL, and voice scam detection. We continuously train our models on Cambodia-specific scam patterns to improve detection rates.",
  },
  {
    q: "What types of scams can it detect?",
    a: "Komnot detects phishing messages, fake payment screenshots, malicious URLs, typosquatting domains, vishing (voice phishing) calls, impersonation attempts, and social engineering tactics in both Khmer and English.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. We use end-to-end encryption for all submitted content. Your data is analyzed in real-time and never stored permanently. We comply with international data protection standards.",
  },
  {
    q: "How much does it cost?",
    a: "Individuals get 10 free checks per day. Premium plans start at $2.99/month for unlimited checks. Business pricing is custom-based on team size—contact us for a quote.",
  },
  {
    q: "Can it work for my business?",
    a: "Yes! Our Enterprise plan includes a team dashboard, analytics, API integration, and custom training. It's designed for teams of 5 to 500+ employees.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
