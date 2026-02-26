import { motion } from "framer-motion";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: "Aspen Online",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-1.png",
  },
  {
    name: "Crop and Highlight",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-2.png",
  },
  {
    name: "Millssy",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-3.png",
  },
  {
    name: "Peppermint",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-4.png",
  },
  {
    name: "Pixie Labs",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-5.png",
  },
  {
    name: "Partner 6",
    logo: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-6.png",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Featured Partners
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you are interested in becoming a partner or sponsor, please feel
            free to contact us.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-border/60 bg-background flex items-center justify-center overflow-hidden grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:border-primary/40">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
