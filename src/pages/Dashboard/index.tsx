import Accordion from "../../components/Accordion";
import Candidates from "../../components/Candidates";
import Search from "../../components/Form/FormElements/Search";
import Layout from "../../components/Layout";
import Header from "../../components/sections/header";

const Dashboard = () => {
  return (
    <Layout>
      <Header />

      <div className=" min-h-[80vh]">
        

        <div className="flex flex-row gap-5 h-full mt-[50px]">
          <div className=" w-[30%] flex flex-col items-center ">
          <Search />
          <div className="max-w-[350px] w-full h-fit  bg-white rounded-[10px]">
            <div className="flex flex-row justify-between items-center px-4 h-[50px] border-b-[1px]">
              <span className="text-[14px] font-[500]">Filter</span>
              <span className="text-[14px] font-[500]">0 Selected</span>
            </div>
            <Accordion />
          </div>
          </div>
       

          <div className="bg-white rounded-[10px] w-[70%]">
           <Candidates/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
