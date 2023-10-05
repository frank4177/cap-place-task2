import { useState } from "react";
import { sidebarMenu } from "./data";
import { settings } from "../icons";

const Sidebar = () => {
  const [active, setActive] = useState("house icon");

  const hover = "bg-[#E9EFFF]"

  return (
    <>
      <div className="w-[7%] flex flex-col gap-2 h-full  items-center p-5 fixed shadow-bs">
        <div className="h-9 w-9 rounded-[50%] bg-gray-300 mb-6"></div>

        <div className="flex flex-col justify-between h-[410px]">
          {sidebarMenu.map((item) => (
            <div
              className={` w-[50px] h-[50px] cursor-pointer ${active === item.alt ? hover : null}  rounded-[10px] flex flex-col items-center justify-center `}
              key={item.alt}
              onClick={()=> setActive(item.alt)}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-4 h-4"
                key={item.alt}
              />
            </div>
          ))}
        </div>

        <div className={` w-[50px] h-[50px]  rounded-[10px] flex flex-col gap-9 mb-5 items-center justify-center mt-auto`}>
            <img src={settings} alt="settings" className="cursor-pointer"/>
            <div className="bg-cPurple h-[25px] w-[25px] flex flex-row justify-center items-center rounded-[50%] cursor-pointer">
                <p className="font-bold text-[#D2E2FF] text-[15px]">AS</p>
              </div>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
