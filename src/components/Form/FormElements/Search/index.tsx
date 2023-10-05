import React from "react";
import { InfoCircleOutlined, SearchOutlined} from "@ant-design/icons";
import { Input, Tooltip } from "antd";

interface props{
  setSearchTerm?:  React.Dispatch<React.SetStateAction<string | undefined>>
}
const Search = ({setSearchTerm}: props) => {

    // Handle the input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setSearchTerm?.(newValue);

    };
  
  return(
  <>
    <Input
      placeholder="Serach by name, edu, exp or #tag"
      prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
      onChange={(e)=>handleInputChange(e)}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip>
      }
      style={{fontWeight: "bold", width:"100%", maxWidth:"350px", height:40}}
    />
    <br />
  </>
)};

export default Search;
