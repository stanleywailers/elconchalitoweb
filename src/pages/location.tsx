import DefaultLayout from "@/layouts/default";

const LocationPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            allowFullScreen={false}
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.1860945556962!2d-89.197389671102!3d13.686015661797688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330e7b2ffa5f1%3A0x7149c214df3257e6!2sEl%20Conchalito%20Candelaria!5e0!3m2!1sen!2ssv!4v1756089151019!5m2!1sen!2ssv"
            style={{ border: 0 }}
            title="map"
            width="100%"
          />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LocationPage;
