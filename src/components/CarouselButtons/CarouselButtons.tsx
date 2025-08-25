type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

const CarouselButtons = ({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: Props) => {
  return (
    <>
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full disabled:opacity-30"
        disabled={!canScrollPrev}
        onClick={onPrev}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full disabled:opacity-30"
        disabled={!canScrollNext}
        onClick={onNext}
      >
        ▶
      </button>
    </>
  );
};

export default CarouselButtons;
