import { Leaf } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      {/* Disclaimer bar */}
      <div className="bg-warm-gray-50 py-2 px-4">
        <p className="text-[11px] text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
          Arthriflex adalah krim pelembap kulit yang mendukung kesehatan sendi & kenyamanan otot. 
          Hasil dapat berbeda setiap individu. Silakan konsultasi dengan tenaga kesehatan bila diperlukan.
        </p>
      </div>
      
      {/* Logo bar */}
      <div className="container-main py-3">
        <div className="flex items-center justify-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            Arthriflex
          </span>
          <span className="text-xs text-muted-foreground ml-1">– Situs Resmi</span>
        </div>
      </div>
    </header>
  );
}
