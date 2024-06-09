import imageSrc from "@assets/scribe4all_horizontal.svg";

import { ScreenSaverForm } from "@features/components/ScreenSaverForm";

import { Image } from "primereact/image";

const ScreenSaverPage = () => {
  return (
    <div
      className="flex flex-column w-screen h-screen gap-4 overflow-y-auto"
      style={{ backgroundColor: "#053547" }}
    >
      <div className="flex flex-row gap-4" style={{ padding: "3.25rem" }}>
        <div className="flex justify-content-center">
          <Image
            src={imageSrc}
            alt="Image"
            width="290"
            height="80"
            className="flex justify-content-between"
          />
        </div>
      </div>
      <div className="flex flex-row justify-content-center w-full">
        <ScreenSaverForm />
      </div>
    </div>
  );
};

export { ScreenSaverPage };
