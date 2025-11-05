import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Kıbrıs Gece Kulübü

Kıbrıs’ın eğlence ve gece hayatı sektöründe profesyonel hizmet sunan öncü bir ekiptir. Misafirlerimize unutulmaz bir deneyim yaşatmak ve işletmelere kaliteli, güvenilir ve profesyonel katalog bayan desteği sağlamak amacıyla kurulduk.

Hizmet anlayışımız; disiplin, gizlilik, güven ve memnuniyet temelleri üzerine kuruludur. Her biri özenle seçilen katalog bayanlarımız; zarafet, profesyonellik ve saygı çerçevesinde hareket eder. Amacımız, Kıbrıs gece hayatına kalite ve güven kazandırmak, hem işletmelerin hem de misafirlerin beklentilerini en üst düzeyde karşılamaktır.

Ekibimiz, sektördeki uzun yıllara dayanan deneyimiyle; kulüpler, oteller ve özel organizasyonlar için özel çözümler sunar. Her detayda mükemmelliği hedefler, iş ortaklarımızla karşılıklı güven ve memnuniyet esasına dayalı bir ilişki kurarız.

📍 Kıbrıs genelinde faaliyet gösteriyoruz.
🔒 Tüm hizmetlerimiz yasal sınırlar içinde, gizlilik politikamıza uygun şekilde yürütülmektedir.;

export async function generateMetadata() {
  return {
    title: "Kıbrıs Gece Kulübü",
    description: "Kıbrıs Gece kulübü bayan katalog ve fiyatları",
    openGraph: {
      title: "Kıbrıs Gece Kulübü",
      description: "Kıbrıs Gece kulübü bayan katalog ve fiyatları",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
