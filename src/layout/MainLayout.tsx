import mainitobaBackground from "@assets/scribe4all_background.png";
import { Button } from "primereact/button";

const MainLayout = () => {
  return (
    <div
      className="flex flex-column h-screen w-screen bg-cover bg-no-repeat"
      style={{
        background: `url(${mainitobaBackground})`,
      }}
    >
      <div
        className="flex p-5 w-screen overflow-auto"
        style={{ height: "inherit" }}
      >
        <div className="flex gap-5 h-full w-screen">
          <div className="h-full w-15rem bg-gray-100 p-5  border-round-xl shadow-2">
            Sidebar
          </div>
          <div className="h-full w-full bg-white p-5  border-round-xl shadow-2 overflow-auto">
            <p>Content</p>
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
