import { Shield, Leaf, Truck } from "lucide-react";
import { OrderForm } from "./OrderForm";
import productImage from "@/assets/arthriflex-product.png";

export function HeroSection() {
  return (
    <section id="hero" className="gradient-hero py-4 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="container-main">
        {/* Mobile Layout - Compact */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-3">
            {/* Title + Image Row */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-shrink-0 w-36 sm:w-44">
                <img
                  src={productImage}
                  alt="Arthriflex - Krim Pendukung Kesehatan Sendi"
                  className="w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-display text-lg sm:text-xl font-bold text-foreground leading-tight">
                  Arthriflex – Krim Pendukung Kesehatan Sendi
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Formula dengan kolagen peptida & herbal alami
                </p>
                {/* Price */}
                <div className="mt-2">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-muted-foreground line-through text-sm">Rp 780.000</span>
                    <span className="text-xl font-bold text-primary">Rp 390.000</span>
                    <span className="bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      -50%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="w-full">
              <OrderForm formId="hero-form" />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-herbal-200/30 rounded-full blur-3xl transform scale-110" />
              <img
                src={productImage}
                alt="Arthriflex - Krim Pendukung Kesehatan Sendi"
                className="relative w-full max-w-lg object-contain animate-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="font-display text-5xl font-bold text-foreground leading-tight text-balance">
                Arthriflex – Krim Pendukung Kesehatan Sendi
              </h1>
              <p className="text-lg text-muted-foreground">
                Formula dengan kolagen peptida & bahan herbal alami
              </p>
            </div>

            {/* Price */}
            <div className="animate-fade-in-up animation-delay-100">
              <div className="inline-flex items-baseline gap-3 bg-card p-4 rounded-xl shadow-card">
                <span className="text-muted-foreground line-through text-lg">Rp 780.000</span>
                <span className="text-3xl font-bold text-primary">Rp 390.000</span>
                <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                  DISKON 50%
                </span>
              </div>
            </div>

            {/* Order Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <OrderForm formId="hero-form" />
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-4 w-4 text-primary" />
                <span>100% Bahan Alami</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Sertifikat Produk Resmi</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-primary" />
                <span>Pengiriman Cepat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
