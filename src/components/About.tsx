import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices and industry standards.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Analytical thinking to break down complex problems into elegant solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Efficient development process ensuring timely delivery without compromising quality.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A passionate programmer dedicated to creating innovative solutions
            and pushing the boundaries of technology.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-border bg-card hover:border-foreground/20"
              >
                <div className="p-3 rounded-lg bg-secondary/50 w-fit mb-4 group-hover:bg-secondary transition-colors">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
