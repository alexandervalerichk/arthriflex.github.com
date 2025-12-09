import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-main py-12">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Leaf className="h-6 w-6" />
          <span className="font-display text-xl font-semibold">Arthriflex</span>
        </div>

        {/* Disclaimers */}
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            Hasil penggunaan dapat berbeda pada setiap individu. Arthriflex adalah krim perawatan 
            kulit dengan bahan alami yang mendukung kenyamanan sendi. Konten pada situs ini tidak 
            menggantikan saran medis profesional. Hubungi dokter jika Anda memiliki kondisi kesehatan tertentu.
          </p>
          
          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            Tidak ada janji pengobatan. Produk ini bukan obat dan tidak digunakan untuk 
            mendiagnosis, mengobati, atau mencegah penyakit.
          </p>
          
          <p className="text-xs text-primary-foreground/50">
            Iklan sesuai pedoman Meta. Tidak ada klaim medis.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6">
          <p className="text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Arthriflex. Situs Resmi Indonesia. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
