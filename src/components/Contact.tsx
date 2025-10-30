import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-border bg-card">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Find me on these platforms
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="gap-2 justify-start"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground">
                  Based in Jakarta, Indonesia
                  <br />
                  Available for remote work worldwide
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
