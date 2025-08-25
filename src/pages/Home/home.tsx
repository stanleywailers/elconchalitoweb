import LocationPreview from "./LocationPreview";
import MenuPreview from "./MenuPreview";

import DefaultLayout from "@/layouts/default";

const HomePage = () => {
  return (
    <DefaultLayout>
      <MenuPreview />
      <LocationPreview />
    </DefaultLayout>
  );
};

export default HomePage;
