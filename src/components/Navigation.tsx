import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Tutup menu setelah klik
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${
          isScrolled
            ? "top-3 w-[92%] md:w-[68%] rounded-xl bg-background/70 shadow-md border border-border/30 backdrop-blur-xl"
            : "top-0 w-full rounded-none bg-background/90 border-b border-border/40 backdrop-blur-md shadow-sm"
        }`}
    >
      <div className="px-4 py-3 sm:px-6 sm:py-2">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Portfolio
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-md border border-border/50 hover:bg-accent transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 border-t border-border/30 backdrop-blur-md">
          <div className="flex flex-col items-center py-4 gap-3">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
