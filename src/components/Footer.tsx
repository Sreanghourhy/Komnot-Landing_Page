import komnotLogo from "@/assets/komnot-logo.png";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#how-it-works" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
  ],
  Resources: [
    { name: "Help Center", href: "#help" },
    { name: "API Docs", href: "#api" },
  ],
};

const Footer = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-[#0B0E14] text-gray-100 py-16 border-t border-gray-800 dark:border-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={komnotLogo}
                alt="Komnot"
                className="h-8 w-8 invert brightness-200"
              />
              <span className="text-xl font-bold text-white">Komnot</span>
            </div>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-6 max-w-xs leading-relaxed">
              Think Before You Click. Protecting Cambodians and businesses from
              online scams with instant AI detection.
            </p>
            {/* Newsletter */}
            <p className="text-xs font-semibold text-gray-200 dark:text-gray-300 mb-2">
              Stay updated on scam alerts
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-900/50 border border-gray-700 dark:border-gray-800 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-gray-700 w-full max-w-[200px]"
              />
              <Button
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white border-0"
              >
                Subscribe
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © 2026 Komnot. Made in Cambodia 🇰🇭
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-500 dark:text-gray-600 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
