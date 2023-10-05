import Accordion from "../../components/Accordion";
import Candidates from "../../components/Candidates";
import Search from "../../components/Form/FormElements/Search";
import Layout from "../../components/Layout";
import Header from "../../components/sections/header";
import {useState, useEffect} from "react"
import { data } from "../../utils/constants";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>()
  const [filteredData, setFilteredItems] = useState<UserData[]>([])


  useEffect(() => {
    // Apply the search filter when the search term changes
    const filtered = data.filter((item) => {
      const itemName = item?.name || ''; // Use an empty string as a default value
      const searchTermValue = searchTerm || ''; // Use an empty string as a default value
      return itemName.toLowerCase().includes(searchTermValue.toLowerCase());
    });
    setFilteredItems(filtered);
  }, [searchTerm, data]);
  
  return (
    <Layout>
      <Header />
      <div className=" min-h-[80vh]">
        <div className="flex flex-row gap-5 h-full mt-[50px]">
          <div className=" w-[30%] flex flex-col items-center ">
          <Search setSearchTerm={setSearchTerm}/>
          <div className="max-w-[350px] w-full h-fit  bg-white rounded-[10px]">
            <div className="flex flex-row justify-between items-center px-4 h-[50px] border-b-[1px]">
              <span className="text-[14px] font-[500]">Filter</span>
              <span className="text-[14px] font-[500]">0 Selected</span>
            </div>
            <Accordion />
          </div>
          </div>
       

          <div className="bg-white rounded-[10px] w-[70%]">
           <Candidates filteredData={filteredData}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
