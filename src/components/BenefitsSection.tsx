import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Flame, 
  Activity, 
  Heart, 
  Droplets,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Meredakan Ketidaknyamanan",
    description: "Membantu meredakan rasa tidak nyaman pada area sendi",
  },
  {
    icon: Flame,
    title: "Sensasi Hangat Alami",
    description: "Memberikan sensasi hangat dari ekstrak herbal alami",
  },
  {
    icon: Activity,
    title: "Fleksibilitas Gerak",
    description: "Mendukung fleksibilitas dan kenyamanan gerak",
  },
  {
    icon: Heart,
    title: "Efek Relaksasi",
    description: "Memberikan efek relaksasi setelah aktivitas fisik",
  },
  {
    icon: Droplets,
    title: "Elastisitas Kulit",
    description: "Kandungan kolagen membantu menjaga elastisitas kulit",
  },
  {
    icon: Target,
    title: "Multi-Area",
    description: "Dapat digunakan pada area lutut, pinggang, bahu, dan pergelangan",
  },
];

export function BenefitsSection() {
  const scrollToForm = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Manfaat Arthriflex
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Formula khusus yang dirancang untuk mendukung kenyamanan sendi Anda sehari-hari
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-herbal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-herbal-100 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" onClick={scrollToForm}>
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
