import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ingredients = [
  {
    name: "Glukosamin",
    description: "Mendukung kesehatan jaringan tulang rawan",
  },
  {
    name: "Kondroitin",
    description: "Membantu menjaga elastisitas sendi",
  },
  {
    name: "Kolagen Peptida",
    description: "Sumber protein untuk elastisitas kulit",
  },
  {
    name: "Oleum Zingiber Officinale Rhizoma",
    description: "Ekstrak rimpang jahe – memberikan rasa hangat nyaman",
  },
  {
    name: "Oleum Capsicum Annum Fructus",
    description: "Sensasi hangat alami",
  },
  {
    name: "Ekstrak Herbal Alami",
    description: "Mendukung relaksasi area sendi",
  },
];

export function CompositionSection() {
  const scrollToForm = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-herbal-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Komposisi Arthriflex
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Diperkaya dengan bahan-bahan alami berkualitas tinggi
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border">
            <ul className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <li 
                  key={ingredient.name}
                  className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-herbal-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{ingredient.name}</h4>
                    <p className="text-sm text-muted-foreground">{ingredient.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
