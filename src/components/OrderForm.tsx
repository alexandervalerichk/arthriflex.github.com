import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface OrderFormProps {
  formId: string;
  variant?: "hero" | "bottom";
}

export function OrderForm({ formId, variant = "hero" }: OrderFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Mohon lengkapi data",
        description: "Nama dan nomor telepon wajib diisi.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Pesanan Diterima!",
      description: "Tim kami akan menghubungi Anda untuk konfirmasi pemesanan.",
    });
    
    setName("");
    setPhone("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id={formId} className="space-y-2 lg:space-y-3">
      <div className="space-y-2 lg:space-y-3">
        <Input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 lg:h-12 text-sm lg:text-base bg-card border-border text-foreground placeholder:text-muted-foreground"
          required
        />
        <Input
          type="tel"
          placeholder="Nomor Telepon (WhatsApp)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-10 lg:h-12 text-sm lg:text-base bg-card border-border text-foreground placeholder:text-muted-foreground"
          required
        />
      </div>
      <Button 
        type="submit" 
        variant="cta-large" 
        size="xl" 
        className="w-full h-10 lg:h-12 text-sm lg:text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Memproses..."
        ) : (
          <>
            <Send className="h-4 w-4 lg:h-5 lg:w-5" />
            Pesan Sekarang
          </>
        )}
      </Button>
      {variant === "hero" && (
        <p className="text-[10px] lg:text-xs text-muted-foreground text-center">
          Pengiriman cepat ke seluruh Indonesia
        </p>
      )}
      {variant === "bottom" && (
        <p className="text-xs text-muted-foreground text-center pt-1">
          Tim kami akan menghubungi Anda untuk konfirmasi pemesanan.
        </p>
      )}
    </form>
  );
}
