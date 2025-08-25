import { Fachada } from "@/components/images";
const LocationPreview = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-16">
      {/* Título */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Ubicación / Casa Matriz
        </h2>
        <p className="text-lg text-gray-600 mt-2">El Conchalito Candelaria</p>
      </div>

      {/* Contenido en 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Imagen */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            alt="El Conchalito Candelaria"
            className="w-full h-96 object-cover"
            src={Fachada} // 🔹 Reemplaza con tu imagen real
          />
        </div>

        {/* Mapa */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
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
      </div>
    </section>
  );
};

export default LocationPreview;
