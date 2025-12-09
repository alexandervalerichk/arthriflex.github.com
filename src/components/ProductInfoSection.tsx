import { Info } from "lucide-react";

const productInfo = [
  { label: "Indikasi", value: "Mendukung kenyamanan area sendi" },
  { label: "Jenis Produk", value: "Gel" },
  { label: "Isi Bersih", value: "25 g" },
  { label: "Penggunaan", value: "Untuk usia 15+" },
  { label: "Peringatan", value: "Tidak dianjurkan untuk ibu hamil & menyusui < 6 bulan" },
  { label: "Penyimpanan", value: "Simpan di bawah 25°C, jauhkan dari jangkauan anak-anak" },
  { label: "Kemasan", value: "Tabung" },
  { label: "Masa Simpan", value: "2 tahun" },
  { label: "Pengiriman", value: "Cepat di seluruh Indonesia" },
];

export function ProductInfoSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-herbal-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Info className="h-4 w-4" />
            Detail Produk
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Informasi Produk
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-card">
            <table className="w-full">
              <tbody>
                {productInfo.map((item, index) => (
                  <tr 
                    key={item.label}
                    className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}
                  >
                    <td className="px-5 py-4 font-medium text-foreground w-1/3 border-r border-border">
                      {item.label}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
