import Carousel from "@/components/Carousel/Carousel";
import { menuItems } from "@/config/menuItems";
import DefaultLayout from "@/layouts/default";

export default function MenuPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Carousel images={menuItems} />
      </section>
    </DefaultLayout>
  );
}
