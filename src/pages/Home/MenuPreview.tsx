import Carousel from "@/components/Carousel/Carousel";
import { menuItems } from "@/config/menuItems";

export default function MenuPreview() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Carousel images={menuItems} />
    </section>
  );
}
