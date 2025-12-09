import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import certificateImage from "@/assets/certificate.jpg";

export function CertificateSection() {
  const scrollToForm = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-herbal-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShieldCheck className="h-4 w-4" />
            Terjamin Aman
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sertifikat & Keamanan Produk
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Arthriflex diproduksi dengan standar kualitas dan keamanan. 
            Menggunakan bahan alami yang dipilih secara cermat dan bebas dari bahan berbahaya.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-xl" />
            <img
              src={certificateImage}
              alt="Sertifikat Keamanan Produk Arthriflex"
              className="relative max-w-sm w-full rounded-xl shadow-card border border-border"
            />
          </div>
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
