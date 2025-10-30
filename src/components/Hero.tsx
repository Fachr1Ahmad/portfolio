import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
const profile = new URL("../assets/profile.png", import.meta.url).href;

type TextTypeProps = {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
};

function TextType({
  text,
  typingSpeed = 70,
  pauseDuration = 1400,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef<number | null>(null);

  useEffect(() => {
    const currentWord = text[wordIndex] ?? "";
    if (!isDeleting && charIndex <= currentWord.length) {
      const timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, Math.max(40, typingSpeed / 2));
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > currentWord.length) {
      pauseRef.current = window.setTimeout(() => {
        setIsDeleting(true);
        setCharIndex((c) => c - 1);
      }, pauseDuration);
      return () => {
        if (pauseRef.current) {
          clearTimeout(pauseRef.current);
          pauseRef.current = null;
        }
      };
    }

    if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % text.length);
      setCharIndex(0);
    }
  }, [charIndex, isDeleting, wordIndex, text, typingSpeed, pauseDuration]);

  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground/90 tracking-tight h-[2.5rem] transition-all duration-300">
      {displayText}
      {showCursor && (
        <span className="ml-1 text-primary font-light animate-pulse">
          {cursorCharacter}
        </span>
      )}
    </h2>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20 pt-24 pb-20 bg-background overflow-hidden"
    >
      {/* === LEFT: Text Section === */}
      <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-muted-foreground">
          Fachri Ahmad
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          Web
          <br />
          <span className="text-muted-foreground/90">Developer</span>
        </h1>

        <TextType
          text={[
            "Building modern interfaces.",
            "Focused on clean design.",
            "Driven by code & creativity.",
          ]}
          typingSpeed={75}
          pauseDuration={1800}
          showCursor
        />

        <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto md:mx-0">
          A junior front-end developer who loves Web Development (JS Ecosystem),
          Mobile App Development, and Artificial Intelligence.
        </p>

        {/* === CTA Buttons === */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <Button
            size="lg"
            className="rounded-full shadow-sm"
            onClick={scrollToProjects}
          >
            See my projects
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get to know me
          </Button>

          <a
            href="/cv-fachri.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium shadow-sm hover:bg-foreground/90 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* === RIGHT: Image Section === */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div
          className="w-56 sm:w-72 md:w-96 rounded-2xl overflow-hidden border border-border/40 
            shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] 
            transition-all duration-500 group backdrop-blur-sm"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
    </section>
  );
}
