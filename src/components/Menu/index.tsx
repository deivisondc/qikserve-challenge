import { Carousel } from "./Carousel";
import { MenuList } from "./MenuList";

const Menu = () => {
  return (
    <div className="row-span-2 flex flex-1 flex-col gap-4 bg-white px-4 pb-6 pt-5 drop-shadow-lg">
      <Carousel />
    </div>
  );
};

export { Menu };
