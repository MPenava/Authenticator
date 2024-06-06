import { Outlet } from "react-router-dom";

import mainitobaBackground from "@assets/scribe4all_background.svg";
import imageSrc from "@assets/scribe4all.svg";

import { Image } from "primereact/image";

const MainLayout = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat overflow-auto"
      style={{ background: `url(${mainitobaBackground})` }}
    >
      <div className="w-screen h-20rem flex justify-content-center align-items-center">
        <div className="flex flex-column p-2">
          <Image
            src={imageSrc}
            alt="Image"
            width="160"
            className="flex justify-content-between pb-3"
          />
        </div>
      </div>
      <div className="w-full flex justify-content-center">
        <Outlet />
      </div>
    </div>
  );
};

export { MainLayout };
