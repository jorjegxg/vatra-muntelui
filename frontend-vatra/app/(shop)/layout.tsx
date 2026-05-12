import { AnnouncementBar } from "@/components/shop/AnnouncementBar";
import { Footer } from "@/components/shop/Footer";
import { Header } from "@/components/shop/Header";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
