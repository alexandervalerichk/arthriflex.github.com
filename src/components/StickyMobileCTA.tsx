import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function StickyMobileCTA() {
  const scrollToForm = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border md:hidden z-50 shadow-xl">
      <Button 
        variant="cta" 
        size="lg" 
        className="w-full"
        onClick={scrollToForm}
      >
        <ShoppingBag className="h-5 w-5" />
        Pesan Sekarang – Rp 390.000
      </Button>
    </div>
  );
}
