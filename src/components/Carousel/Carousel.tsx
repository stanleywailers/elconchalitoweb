import Zoom from "react-medium-image-zoom";

import "react-medium-image-zoom/dist/styles.css";
import CarouselButtons from "../CarouselButtons/CarouselButtons";

import useCarousel from "@/hooks/useCarousel";

interface ImageSlide {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageSlide[];
}

const Carousel = ({ images }: CarouselProps) => {
  const { emblaRef, emblaApi, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={i}
              className="
    flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_50%] 
    min-w-0 p-2
  "
            >
              <Zoom>
                <img
                  alt={img.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl cursor-zoom-in"
                  src={img.src}
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>

      <CarouselButtons
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </div>
  );
};

export default Carousel;
