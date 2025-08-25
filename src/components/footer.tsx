import { Link } from "@heroui/link";

import { PedidosYaIcon, UberEatsIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 mt-16 shadow-inner">
      <div className="container mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6">
        {/* Información del restaurante */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-gray-900">
            El Conchalito Candelaria
          </h3>
          <p className="text-gray-700 text-lg">Tradición desde 1971</p>
          <p className="text-gray-600 hover:text-primary transition-colors">
            Tel:{" "}
            <a className="hover:underline" href="tel:22706416">
              2270-6416
            </a>
          </p>
          <p className="text-gray-600 hover:text-primary transition-colors">
            Correo:{" "}
            <a
              className="hover:underline"
              href="mailto:elconchalitocandelaria@gmail.com"
            >
              elconchalitocandelaria@gmail.com
            </a>
          </p>
        </div>

        {/* Botones de pedidos y delivery */}
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-gray-800 font-semibold text-center">
            Pide Online
          </h4>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              isExternal
              href="https://www.ubereats.com/sv-en/store/el-conchalito-candelaria-restaurante-san-salvador/znLV7GFTVS-qIfswR3DZfg?diningMode=PICKUP&surfaceName="
              title="Uber Eats"
            >
              <UberEatsIcon
                className="hover:scale-110 transition-transform"
                size={100}
              />
            </Link>
            <Link
              isExternal
              href="https://www.pedidosyasv.com.sv/restaurantes/san-salvador/el-conchalito-candelaria-restaurante-menu?search=el+conchalito+candelaria"
              title="PedidosYa"
            >
              <PedidosYaIcon
                className="hover:scale-110 transition-transform"
                size={60}
              />
            </Link>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-2 text-center md:text-right items-center md:items-end">
          <h4 className="text-gray-800 font-semibold">Contáctanos</h4>
          <Link
            isExternal
            className="flex items-center gap-2 text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors justify-center md:justify-end"
            href="https://wa.me/50376487249"
            title="Chatear por WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
            WhatsApp
          </Link>
        </div>
      </div>

      {/* Pie de página */}
      <div className="w-full border-t border-gray-200 mt-6 py-3 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} El Conchalito. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
