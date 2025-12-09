import { OrderForm } from "./OrderForm";
import { ShoppingBag } from "lucide-react";

export function BottomOrderSection() {
  return (
    <section id="order" className="section-padding bg-herbal-600">
      <div className="container-main">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ShoppingBag className="h-4 w-4" />
              Pesan Sekarang
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Pesan Arthriflex Sekarang
            </h2>
            
            {/* Price */}
            <div className="inline-flex items-baseline gap-3 bg-primary-foreground/10 backdrop-blur p-4 rounded-xl mb-6">
              <span className="text-primary-foreground/60 line-through text-lg">Rp 780.000</span>
              <span className="text-3xl font-bold text-primary-foreground">Rp 390.000</span>
              <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                DISKON 50%
              </span>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl">
            <OrderForm formId="bottom-form" variant="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
