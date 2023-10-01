import React from "react";
import { InfoCircleOutlined, SearchOutlined} from "@ant-design/icons";
import { Input, Tooltip } from "antd";

const Search: React.FC = () => (
  <>
    <Input
      placeholder="Serach by name, edu, exp or #tag"
      prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip>
      }
      style={{fontWeight: "bold", width:"100%", maxWidth:"350px", height:40}}
    />
    <br />
  </>
);

export default Search;
