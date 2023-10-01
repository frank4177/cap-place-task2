import { useState } from "react";
import { sidebarMenu } from "./data";

const Sidebar = () => {
  const [active, setActive] = useState("house icon");

  const hover = "bg-[#E9EFFF]"

  return (
    <>
      <div className="w-[7%] flex flex-col gap-2 h-full  items-center p-5 fixed shadow-bs">
        <div className="h-9 w-9 rounded-[50%] bg-gray-300 mb-6"></div>

        <div className="flex flex-col justify-between h-[550px]">
          {sidebarMenu.map((item) => (
            <div
              className={` w-[50px] h-[50px] cursor-pointer ${active === item.alt ? hover : null}  rounded-[10px] flex flex-col items-center justify-center `}
              key={item.alt}
              onClick={()=> setActive(item.alt)}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-6 h-6"
                key={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
