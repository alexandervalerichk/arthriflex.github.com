import { Button } from "@/components/ui/button";
import { Hand, Clock, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Hand,
    step: "1",
    title: "Oleskan",
    description: "Oleskan pada bagian yang memerlukan",
  },
  {
    icon: Sparkles,
    step: "2",
    title: "Pijat",
    description: "Pijat perlahan hingga merata",
  },
  {
    icon: Clock,
    step: "3",
    title: "Diamkan",
    description: "Diamkan 15 menit, tidak perlu dibilas",
  },
];

export function UsageSection() {
  const scrollToForm = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Cara Pemakaian
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mudah dan praktis untuk penggunaan sehari-hari
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {steps.map((item, index) => (
            <div 
              key={item.step}
              className="text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 bg-herbal-100 rounded-full" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-card rounded-xl p-6 max-w-xl mx-auto border border-border shadow-card">
          <p className="text-muted-foreground text-sm">
            Gunakan sesuai kebutuhan untuk hasil optimal.
          </p>
        </div>

        <div className="text-center mt-10">
          <Button variant="cta" size="lg" onClick={scrollToForm}>
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
