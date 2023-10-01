import DropDown from "../../Form/FormElements/DropDown";
import Select from "../../Form/FormElements/Select2";
import { mail, tag, userCancel, userCheck, userSpeak } from "../../icons";


const userButtons =  [
  {icon:tag, alt:"tag"},
  {icon:userCancel , alt:"cancel"},
  {icon:userCheck , alt:"check"},
  {icon:userSpeak , alt:"speak"},
  {icon:mail , alt:"mail"},
]

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between  min-h-[100px]">
        <div>
          <p className="text-[22px] font-bold text-[#1D4ED8]">London Internship Program</p>
          <p className="text-[14px]">London</p>
        </div>
        <Select/>

        <div className="flex flex-row gap-3">
          {userButtons.map((item)=>(
            <div className="w-[60px] rounded-[10px] cursor-pointer flex flex-col justify-center items-center h-[50px] bg-white" key={item.alt}>
            <img src={item.icon} alt={item.alt} className="w-6 h-6"/>
          </div>
          ))}
          
        </div>

        <DropDown />
      </div>
    </>
  );
};

export default Header;
